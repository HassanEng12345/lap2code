const db = require("../dbConfig/init");

module.exports = class Post {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.pseudonym = data.pseudonym;
        this.body = data.body;
    }

    static get all() {
        return new Promise(async (resolve, reject) => {
            try {
                const postData = await db.query("SELECT * FROM posts;");
                const posts = postData.rows.map((p) => new Post(p));
                resolve(posts);
            } catch (error) {
                reject("Post not found");
            }
        });
    }

    static create(postData) {
        return new Promise(async (resolve, reject) => {
            try {
                const { title, pseudonym, body } = postData;
                const newPostData = await db.query(
                    `INSERT INTO posts (title, pseudonym, body) VALUES ($1, $2, $3) RETURNING *;`,
                    [title, pseudonym, body]
                );
                const newPost = new Post(newPostData.rows[0]);
                console.log(newPost);
                resolve(newPost);
            } catch (error) {
                reject("Post could not be created");
            }
        });
    }

    async destroy() {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await db.query("DESTROY FROM posts WHERE id = $1 RETURNING author_id;", [this.id]);
                const author = await Post.findById(result.rows[0].author_id);
                const books = await author.books;
                if (!books.length) {
                    await author.destroy();
                }
                resolve("Book was deleted");
            } catch (err) {
                reject("Book could not be deleted");
            }
        });
    }
};

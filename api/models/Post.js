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

    static findByTitle() {
        return new Promise(async (resolve, reject) => {
            try {
                const postData = await db.query(`SELECT title FROM posts WHERE title = $1;`, [this.title]);
                const post = new Post(postData.rows[0]);
                resolve(post);
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
};

const db = require("../dbConfig/init");

module.exports = class Post {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.pseudonym = data.pseudonym;
        this.body = data.body;
    }

    static async create(postData) {
        return new Promise(async (resolve, reject) => {
            try {
                const { title, pseudonym, body } = postData;
                const newPostData = await db.query(
                    "INSERT INTO posts (title, pseudonym, body) VALUES ($1, $2, $3) RETURNING id;",
                    [title, pseudonym, body]
                );
                const newPost = new Post(newPostData.rows[0]);
                resolve(newPost);
            } catch (error) {
                reject("Post could not be created");
            }
        });
    }
};

const Post = require("../models/Post");

async function index(req, res) {
    try {
        const posts = await Post.all;
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
}

async function create(req, res) {
    try {
        const post = await Post.create(req.body);
        console.log(post);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { index, create };

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
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
}

async function show(req, res) {
    try {
        const post = Post.findByTitle;
        res.status;
    } catch (error) {}
}

module.exports = { index, create };

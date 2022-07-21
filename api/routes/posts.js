const express = require("express");
const router = express.Router();
const postController = require("../controllers/posts");

router.get("/", postController.index);
router.get("/:title", postController.show);
router.post("/", postController.create);

module.exports = router;

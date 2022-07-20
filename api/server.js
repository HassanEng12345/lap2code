const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const postRoutes = require("./routes/posts");
app.use("/posts", postRoutes);

app.get("/", (req, res) => res.send("Hello World"));

module.exports = app;

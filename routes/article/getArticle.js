const express = require("express");
const app = express.Router();
const db = require("../../models");

app.get("/article", async (req, res, next) => {
  try {
    let article = await db.articles.findAll({
      where: req.query,
    });
    if (!article.length) {
      res.status(404).send("article not found");
    } else {
      res.status(200).send(article);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = app;

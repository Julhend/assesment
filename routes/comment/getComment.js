const express = require("express");
const app = express.Router();
const db = require("../../models");

app.get("/comment", async (req, res, next) => {
  try {
    let comment = await db.comments.findAll({
      where: req.query,
    });
    if (!comment.length) {
      res.send("article not found");
    } else {
      res.status(200).send(comment);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = app;

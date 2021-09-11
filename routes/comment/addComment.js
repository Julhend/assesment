const express = require("express");
const app = express.Router();
const db = require("../../models");
const passport = require("../../middleware/authorizationMiddleware");
const { v4 } = require("uuid");

app.post("/comment/:id/create", passport.authenticate("bearer", { session: false }), async (req, res, next) => {
  let body = req.body;
  body.id = v4();
  body.userId = req.user.id;
  body.articleId = req.params.id;
  try {
    const addComment = await db.comments.create(body);
    res.status(200).send(addComment);
  } catch (error) {
    next(error);
  }
});

module.exports = app;

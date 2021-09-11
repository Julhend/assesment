const express = require("express");
const app = express.Router();
const db = require("../../models");
const passport = require("../../middleware/authorizationMiddleware");
const { v4 } = require("uuid");

app.post("/article/create", passport.authenticate("bearer", { session: false }), async (req, res, next) => {
  let body = req.body;
  body.id = v4();
  body.userId = req.user.id;
  try {
    const addArticle = await db.articles.create(body);
    res.status(200).send(addArticle);
  } catch (error) {
    next(error);
  }
});

module.exports = app;

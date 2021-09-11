const express = require("express");
const app = express.Router();
const db = require("../../models");
const passport = require("../../middleware/authorizationMiddleware");

app.patch("/article/:id/edit", passport.authenticate("bearer", { session: false }), async (req, res, next) => {
  let body = req.body;
  try {
    let article = await db.articles.findAll({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });
    if (!article.length) {
      res.status(400).send("article not found or you can't edit this article");
    } else {
      const result = await db.articles.update(body, {
        where: {
          id: req.params.id,
          userId: req.user.id,
        },
      });

      if (result == 1) {
        res.status(200).send(
          await db.articles.findAll({
            where: {
              id: req.params.id,
            },
          })
        );
      } else {
        res.send("update failed");
      }
    }
  } catch (error) {
    next(error);
  }
});

module.exports = app;

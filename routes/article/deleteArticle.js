const express = require("express");
const app = express.Router();
const db = require("../../models");
const passport = require("../../middleware/authorizationMiddleware");

app.delete("/article/:id/delete", passport.authenticate("bearer", { session: false }), async (req, res, next) => {
  try {
    let article = await db.articles.findAll({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });
    if (!article.length) {
      res.send("article not found or you can't delete this article");
    } else {
      const result = await db.articles.destroy({
        where: {
          id: req.params.id,
          userId: req.user.id,
        },
      });

      if (result == 1) {
        res.status(200).send("Article Deleted");
      } else {
        res.send("Delete Failed");
      }
    }
  } catch (error) {
    next(error);
  }
});

module.exports = app;

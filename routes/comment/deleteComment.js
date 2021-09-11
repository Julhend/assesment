const express = require("express");
const app = express.Router();
const db = require("../../models");
const passport = require("../../middleware/authorizationMiddleware");

app.delete("/comment/:id/delete", passport.authenticate("bearer", { session: false }), async (req, res, next) => {
  try {
    let comment = await db.comments.findAll({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });
    if (!comment.length) {
      res.status(400).send("comment not found or you can't delete this comment");
    } else {
      const result = await db.comments.destroy({
        where: {
          id: req.params.id,
          userId: req.user.id,
        },
      });

      if (result == 1) {
        res.status(200).send("Comment Deleted");
      } else {
        res.send("Delete Failed");
      }
    }
  } catch (error) {
    next(error);
  }
});

module.exports = app;

const express = require("express");
const app = express.Router();
const db = require("../../models");
const passport = require("../../middleware/authorizationMiddleware");

app.patch("/users/edit/:id", passport.authenticate("bearer", { session: false }), async (req, res, next) => {
  let body = req.body;
  let params = req.params.id;
  const check = await db.users.findAll({
    where: {
      id: params,
    },
  });
  if (check.length == 0) {
    return res.status(404).send("users not found");
  } else {
    if (body.email) {
      res.send("e-mail cannot be edited");
    } else {
      const result = await db.users
        .update(body, {
          where: {
            id: params,
          },
        })
        .catch((err) => res.next(err));
      if (result == 1) {
        res.send(
          await db.users.findAll({
            where: {
              id: params,
            },
          })
        );
      } else {
        res.send("update failed");
      }
    }
  }
});

module.exports = app;

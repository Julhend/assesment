const express = require("express");
const app = express.Router();
const db = require("../../models");

app.get("/users", async (req, res, next) => {
  try {
    let user = await db.users.findAll({});
    return res.status(200).send(user);
  } catch (err) {
    next(err);
  }
});

app.get("/users/:id", async (req, res, next) => {
  try {
    let user = await db.users.findAll({
      where: {
        id: req.params.id,
      },
    });

    if (user.length == 1) {
      return res.status(200).send(user);
    } else {
      return res.status(404).send("user not found");
    }
  } catch (err) {
    next(err);
  }
});

module.exports = app;

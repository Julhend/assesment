const express = require("express");
const app = express.Router();
const db = require("../../models");

app.get("/users", async (req, res, next) => {
  try {
    let user = await db.users.findAll({
      where: req.query,
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

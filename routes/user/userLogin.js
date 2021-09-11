const express = require("express");
const app = express.Router();
const db = require("../../models");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../../config/jwtConfig");
const { checkPassword } = require("../../helpers/bcryptHelper");

app.post("/auth/login", async (req, res, next) => {
  let body = req.body;
  let email = req.body.email;
  let username = req.body.userName;
  try {
    let user = await db.users.findAll({
      where: {
        email: email,
      },
    });
    if (!user.length) {
      return res.status(404).send("User not available");
    } else {
      user = user[0];
      const isPassMatch = await checkPassword(body.password, user.password);
      if (!isPassMatch) {
        return res.status(400).send("Password not match");
      } else {
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, jwtConfig.options);
        user.dataValues.token = token;
        delete user.dataValues.password;
        res.send(user.dataValues);
      }
    }
  } catch (err) {
    next(err);
  }
});

module.exports = app;

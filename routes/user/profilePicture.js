const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const app = express.Router();
const db = require("../../models");

fs.readdir(path.resolve(), (err, files) => {
  if (err) console.log(err);
  else if (!files.includes("uploads")) {
    console.log("creating uploads folder");
    fs.mkdir(path.resolve("uploads"), (err) => 1);
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
const passport = require("../../middleware/authorizationMiddleware");
const HOSTNAME = process.env.HOST;

app.post("/users/picture", upload.single("file"), passport.authenticate("bearer", { session: false }), async (req, res) => {
  const fileName = `${HOSTNAME}/files/${req.file.originalname.replace(" ", "%20")}`;
  await db.users.update(
    {
      profilePicture: fileName,
    },
    {
      where: { id: req.user.id },
    }
  );

  const user = await db.users.findOne({
    where: { id: req.user.id },
  });
  res.send(user);
});

module.exports = app;

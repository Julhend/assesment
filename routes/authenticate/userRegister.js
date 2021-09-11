const express = require("express");
const app = express.Router();
const mysqlErrorHandler = require("../../middleware/errorMiddleware");

app.post("/auth/register", async (req, res, next) => {});

app.use(mysqlErrorHandler);
module.exports = app;

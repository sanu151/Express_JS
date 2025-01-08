const express = require("express");
const app = express();

const myMiddleware = (req, res, next) => {
  req.currnetTime = new Date(Date.now());
  console.log("This is myMiddleware");
  next();
};
app.get("/", myMiddleware, (req, res) => {
  res.send(`<h1>Time now : ${req.currnetTime} </h1>`);
});

module.exports = app;

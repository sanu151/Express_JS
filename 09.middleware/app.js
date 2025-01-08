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

// Error Handle Middleware
app.use((req, res, next) => {
  res.send("<h1> 404 Bad URL request");
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

module.exports = app;

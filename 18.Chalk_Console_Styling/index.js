const express = require("express");
const chalk = require("chalk");

const app = express();

const success = chalk.bold.bgGreen.whiteBright;
const warning = chalk.bgYellow.black;
const error = chalk.bold.bgRed.whiteBright;

app.get("/", (req, res) => {
  res.status(200).send("<h2>chalk npm package</h2>");
  res.end();
});

app.listen(3000, () => {
  console.log(
    warning("Server is") +
      error(" running") +
      warning(" at") +
      success(" http://localhost:3000")
  );
});

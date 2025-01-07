const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use((req, res) => {
  res.send("Error: 404 Page not found");
});

module.exports = app;

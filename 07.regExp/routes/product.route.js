const express = require("express");
const route = express.Router();

route.use("/:id([pi0-9]{5})", (req, res) => {
  res.send(`<h1>Product id : ${req.params.id}</h1>`);
});

route.use("/:title([a-zA-Z0-9]+)", (req, res) => {
  res.send(`<h1>Product Title : ${req.params.title}`);
});

module.exports = route;

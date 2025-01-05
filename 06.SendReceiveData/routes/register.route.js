const express = require("express");
const route = express.Router();
const bodyParser = require("body-parser");
const path = require("path");

route.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/form.html"));
});

// parse application/x-www-form-urlencoded
route.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
route.use(bodyParser.json());

route.post("/", (req, res) => {
  const fullName = req.body.fullName;
  const email = req.body.email;
  res.send(`<h3>Hello ${fullName}, your email id is : ${email}`);
  res.end();
});

module.exports = route;

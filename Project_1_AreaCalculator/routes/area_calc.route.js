const express = require("express");
const route = express.Router();
const path = require("path");
const bodyParser = require("body-parser");

route.get("/triangle", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/triangle.html"));
});
route.get("/circle", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/circle.html"));
});

// parse application/x-www-form-urlencoded
route.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
route.use(bodyParser.json());

route.post("/triangle", (req, res) => {
  const base = req.body.base;
  const height = req.body.height;
  const result = 0.5 * base * height;

  res.send(
    `Area of the Triangle is : ${result} <button><a href="/area/triangle">Return</a></button>`
  );
});

route.post("/circle", (req, res) => {
  const radious = req.body.radious;
  const result = (22 / 7) * radious * radious;
  res.send(
    `Area of the Circle is : ${result} <button><a href="/area/circle">Return</a></button>`
  );
});

module.exports = route;

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

// query parameter
app.get("/", (req, res) => {
  const { id, name } = req.query;
  res.send(`<h1>Hi I am ${name}, My id is ${id}<h1>`);
  res.end();
});

// route parameter
app.get("/route_param/name/:name/age/:age", (req, res) => {
  const { name, age } = req.params;
  res.send(`<h1>My name is ${name}, I am ${age} years old.</h1>`);
  res.end();
});

// JSON data using body-perser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.post("/json_data", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  res.send(`Name : ${name}, Email : ${email}`);
  res.end();
});

// header
app.get("/header", (req, res) => {
  const id = req.header("id"); // get id and name from API. use POSTMAN for testing.
  const name = req.header("name");
  res.send(`<h1>Hi! My name is ${name}, my Roll no is ${id}</h1>`);
  res.end();
});

module.exports = app;

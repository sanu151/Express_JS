const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

app.get("/users", (req, res) => {
  res.status(200).send("Users Page");
});

app.post("/users", (req, res) => {
  res.status(201).send("Create User");
});

app.put("/users", (req, res) => {
  res.status(204).send("Update User");
});

app.delete("/users", (req, res) => {
  res.status(200).send("delete User");
});

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});

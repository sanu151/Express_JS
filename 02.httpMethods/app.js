const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(" This is get method form home route");
});
app.post("/", (req, res) => {
  res.send(" This is post method form home route");
});
app.put("/", (req, res) => {
  res.send(" This is put method form home route");
});
app.delete("/", (req, res) => {
  res.send(" This is delete method form home route");
});

app.get("/about", (req, res) => {
  res.send(" This is get method form about route");
});
app.post("/about", (req, res) => {
  res.send(" This is post method form about route");
});
module.exports = app;

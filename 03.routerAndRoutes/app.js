const express = require("express");
const app = express();
const usersRouter = require("./routes/users.router");

app.get("/", (req, res) => {
  res.send("<h1>This is get request from home page</h1>");
});

app.use("/api/users", usersRouter);

app.use((req, res) => {
  res.send("404: Page not found");
});

module.exports = app;

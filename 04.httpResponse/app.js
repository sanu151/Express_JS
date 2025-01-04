const express = require("express");
const app = express();
const userRouter = require("./routes/user.route");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/user", userRouter);

app.use((req, res) => {
  res.send("404 Page not found");
});

module.exports = app;

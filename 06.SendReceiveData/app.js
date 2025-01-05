const express = require("express");
const app = express();
const userRouter = require("./routes/register.route");

app.get("/", (req, res) => {
  res.send("This is Home Route");
});

app.use("/user", userRouter);

module.exports = app;

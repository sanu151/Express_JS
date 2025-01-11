//MVC Architecture

const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const homeRouter = require("./routes/home.route");
const userRouter = require("./routes/users.route");

app.use(homeRouter);
app.use(userRouter);

app.use((req, res, next) => {
  res.status(404);
  res.send("<h1>Error ! 404 Bad URL request");
});

module.exports = app;

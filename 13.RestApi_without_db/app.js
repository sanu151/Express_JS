const express = require("express");
const { notFoundPage } = require("./controller/app.controller");
const app = express();
const appRoutes = require("./routes/app.routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(appRoutes);
app.use(notFoundPage);

module.exports = app;

const express = require("express");
const app = express();
const productRoute = require("./routes/product.route");

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/product", productRoute);

app.use("*", (req, res) => {
  res.status(404).send("<h2>Error! Not a valid URL</h2>");
});

module.exports = app;

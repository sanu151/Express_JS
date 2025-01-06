const express = require("express");
const app = express();
const path = require("path");
const areaRoutes = require("./routes/area_calc.route");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/home.html"));
});

app.use("/area", areaRoutes);

module.exports = app;

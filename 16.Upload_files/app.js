const cors = require("cors");
const express = require("express");
const app = express();

const appRouter = require("./routes/app.routes");

require("./configs/db.config");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(appRouter);

module.exports = app;

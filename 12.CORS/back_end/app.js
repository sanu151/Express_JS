const express = require("express");
const app = express();
const userRouter = require("./routes/user.router");
const cors = require("cors");

app.use(cors());
app.use(userRouter);

module.exports = app;

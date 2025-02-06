const path = require("path");
const dbModule = require("../models/db.module");

const homeRoute = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../views/home.html"));
};

const createUsers = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../views/upload.html"));
};

const userData = async (req, res) => {
  const newUser = new dbModule({
    name: req.body.name,
    age: req.body.age,
    image: req.file.filename,
  });
  const saveUser = await newUser.save();
  res.status(200).send(saveUser);
};

module.exports = { homeRoute, createUsers, userData };

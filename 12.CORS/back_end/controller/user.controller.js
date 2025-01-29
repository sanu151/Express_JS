const users = require("../module/users.module");

exports.homeData = (req, res) => {
  res.send("<h1>EORS test Project</h1>");
};

exports.sendUsers = (req, res) => {
  res.status(201).json(users);
};

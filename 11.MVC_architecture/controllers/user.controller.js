const path = require("path");
const users = require("../modules/users.module");

exports.addUser = (req, res) => {
  res.sendFile(path.join(__dirname, "/../views/users.html"));
};

exports.saveUser = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const user = {
    name,
    email,
  };
  users.push(user);
  res.status(201).json({
    success: true,
    users,
  });
};

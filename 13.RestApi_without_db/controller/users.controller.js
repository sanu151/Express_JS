let users = require("../modules/users.module");
const { v4: uuidv4 } = require("uuid");

// Create User
const createUser = (req, res) => {
  const { name, age, gender, email } = req.body;
  const newUser = {
    id: uuidv4(),
    name,
    age,
    gender,
    email,
  };
  users.push(newUser);
  res.status(200).send(`User <b>${newUser.id}</b> created`);
  return users;
};

// Read Users
const getUsers = (req, res) => {
  const allUsers = users;
  res.status(200).send(allUsers);
};

// Update User
const updateUser = (req, res) => {
  const id = req.params.id;
  const { name, age, gender, email } = req.body;
  users
    .filter((user) => user.id === id)
    .map((selectedUser) => {
      selectedUser.name = name;
      selectedUser.age = age;
      selectedUser.gender = gender;
      selectedUser.email = email;
    });
  res.status(200).send(`User <b>${id}</b> Updated`);
  res.end();
  return users;
};

// Delete User
const deleteUser = (req, res) => {
  const id = req.params.id;
  users = users.filter((user) => user.id !== id);
  res.status(200).send(`User <b>${id}</b> deleted`);
  res.end();
  return users;
};

module.exports = { createUser, getUsers, updateUser, deleteUser };

const express = require("express");
const { addUser, saveUser } = require("../controllers/user.controller");

const route = express.Router();

route.get("/users", addUser);
route.post("/users", saveUser);

module.exports = route;

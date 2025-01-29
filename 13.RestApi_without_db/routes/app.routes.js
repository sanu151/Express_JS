const express = require("express");
const { homeRoute } = require("../controller/app.controller");
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/users.controller");
const router = express.Router();

router.get("/", homeRoute);
router.get("/users", getUsers);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;

const express = require("express");
const {
  homeRoute,
  createUsers,
  userData,
} = require("../controllers/routes.controller");
const upload = require("../configs/upload.config");
const router = express.Router();

router.get("/", homeRoute);
router.get("/users", createUsers);
router.post("/users", upload.single("image"), userData);

module.exports = router;

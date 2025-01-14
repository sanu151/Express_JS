const express = require("express");
const { sendUsers, homeData } = require("../controller/user.controller");
const router = express.Router();

router.get("/", homeData);
router.get("/users", sendUsers);

module.exports = router;

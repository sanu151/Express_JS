const express = require("express");
const {
  homeRoute,
  userRegistration,
  userLogin,
} = require("../controller/user.controller");
const { runValidation } = require("../validation/validate");
const { schema } = require("../validation/schema");
const router = express.Router();

router.get("/", homeRoute);
router.post(
  "/register",
  runValidation(schema.userRegisterSchema),
  userRegistration
);
router.post("/login", runValidation(schema.userLoginSchema), userLogin);

module.exports = router;

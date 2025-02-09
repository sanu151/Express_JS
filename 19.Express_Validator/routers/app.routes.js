const express = require("express");
const {
  homeRoute,
  userRegistration,
  userLogin,
} = require("../controllers/routes.controller");
const {
  userRegistrationValidator,
  userLoginValidatior,
} = require("../validators/auth");
const { runValidation } = require("../validators/validation");
const userRouter = express.Router();

userRouter.get("/", homeRoute);
userRouter.post(
  "/register",
  userRegistrationValidator,
  runValidation,
  userRegistration
);
userRouter.post("/login", userLoginValidatior, runValidation, userLogin);

module.exports = userRouter;

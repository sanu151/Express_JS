const { check } = require("express-validator");

exports.userRegistrationValidator = [
  check("name")
    .trim()
    .notEmpty()
    .withMessage("Name Can't be Empty")
    .isLength({ min: 5 })
    .withMessage("Name must be at least 5 characters"),
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Email Can't be Empty")
    .isEmail()
    .withMessage("Not a valid Email"),
  check("password")
    .trim()
    .notEmpty()
    .withMessage("Password Can't be Empty")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  check("dob")
    .trim()
    .notEmpty()
    .withMessage("DOB Can't be Empty")
    .isISO8601()
    .toDate()
    .withMessage("Not a valid DOB"),
];

exports.userLoginValidatior = [
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Email Can't be Empty")
    .isEmail()
    .withMessage("Not a valid Email"),
  check("password")
    .trim()
    .notEmpty()
    .withMessage("Password Can't be Empty")
    .isLength({ min: 6 }),
];

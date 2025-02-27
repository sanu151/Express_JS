const { validationResult } = require("express-validator");

exports.runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    let errorsList = errors.array().map((error) => error.msg);
    return res.status(422).json({
      success: false,
      errorsList,
    });
  }
  next();
};

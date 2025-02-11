const Joi = require("joi");

exports.schema = {
  userRegisterSchema: Joi.object({
    name: Joi.string().min(3).required(),
    age: Joi.number().min(0).required(),
    gender: Joi.string().valid("Male", "Female", "Other").required(),
    email: Joi.string().email().required(),
    dob: Joi.date().iso().required(),
    password: Joi.string().min(6).required(),
    confPassword: Joi.string().valid(Joi.ref("password")).required(),
  }),
  userLoginSchema: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  }),
};

import Joi from "joi";
import requestValidator from "../../utils/validator/request";
const signupSchema = Joi.object({
  first_name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .pattern(new RegExp(/^[a-z ,.'-]+$/i))
    .required(),
  last_name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .pattern(new RegExp(/^[a-z ,.'-]+$/i))
    .required(),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  repeat_password: Joi.ref("password"),
  email: Joi.string().email().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export default {
  signupValidator: requestValidator(signupSchema),
  loginValidator: requestValidator(loginSchema),
};

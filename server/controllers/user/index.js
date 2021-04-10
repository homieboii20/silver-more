import { handleResponse } from "../../utils/handler";
import { signUp, checkUserExistsByEmail, login } from "../../core/user";
import Boom from "@hapi/boom";

const userSignup = async (req, res, next) => {
  const { body } = req;
  const emailTaken = await checkUserExistsByEmail(body.email);
  if (emailTaken) throw Boom.unauthorized("Email already taken");
  const result = await signUp(body);
  return result.email;
};

const userLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await login(email, password);
  return email;
};

export default {
  userSignup: handleResponse(userSignup),
  userLogin: handleResponse(userLogin),
};

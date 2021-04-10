import { passwordEncryptor, validatePassword } from "../../utils/pw";
import { userRepo } from "../../repositories";
import Boom from "@hapi/boom";

const signUp = async (userData) => {
  const encryptedPassword = await passwordEncryptor(userData.password);
  userData.password = encryptedPassword;
  return userRepo.createUser(userData);
};

const checkUserExistsByEmail = async (email) => {
  return (await userRepo.findByEmail(email)) ? true : false;
};

const login = async (email, password) => {
  const user = await userRepo.findByEmail(email);
  if (!user) throw Boom.badRequest("Wrong email or password");
  const passwordCorrect = await validatePassword(password, user.password);
  if (!passwordCorrect) throw Boom.badRequest("Wrong email or password");
  return user;
};

export { signUp, checkUserExistsByEmail, login };

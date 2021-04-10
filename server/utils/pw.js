import bcrypt from "bcrypt";
const saltRounds = 10;
const passwordEncryptor = async (pw) => {
  return bcrypt.hash(pw, saltRounds);
};

const validatePassword = async (plain, hashed) => {
  const match = await bcrypt.compare(plain, hashed);
  return match ? true : false;
};

export { passwordEncryptor, validatePassword };

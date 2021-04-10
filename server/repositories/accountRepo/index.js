import { Account } from "../../models";

const createAccount = async (accountData) => {
  try {
    const account = await Account.create(accountData);
    return account;
  } catch (error) {
    throw new Error(error);
  }
};

const findById = async (_id) => {
  try {
  const account = await Account.findOne(_id);
  return account;
} catch (error) {
  throw new Error(error);
}
};
export default { createAccount, findById };

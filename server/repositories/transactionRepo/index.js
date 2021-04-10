import { Transaction } from "../../models";

const createTransaction = async (transData) => {
  try {
    const trans = await Transaction.create(transData);
    return trans;
  } catch (error) {
    throw new Error(error);
  }
};

export default { createTransaction };

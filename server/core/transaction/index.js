import { transactionRepo } from "../../repositories";
import Boom from "@hapi/boom";

const createTrans = async (transData) => {
  const transaction = await transactionRepo.createTransaction(transData);
  return transaction;
};

export { createTrans };

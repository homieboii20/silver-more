import { handleResponse } from "../../utils/handler";
import { createTrans } from "../../core/transaction";
import Boom from "@hapi/boom";

const transCreate = async (req, res, next) => {
  const { body } = req;
  const { accountID } = req.params;
  const transaction = await createTrans(body);
  return transaction;
};

export default {
  userSignup: handleResponse(userSignup),
  userLogin: handleResponse(userLogin),
};

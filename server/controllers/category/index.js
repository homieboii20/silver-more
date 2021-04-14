import { handleResponse } from "../../utils/handler";
import { create } from "../../core/category";
import Boom from "@hapi/boom";

const categoryCreate = async (req, res, next) => {

  const { body } = req;
  const result = await create(body);
  return result;
};

export default {
  categoryCreate: handleResponse(categoryCreate)
};

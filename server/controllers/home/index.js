import { handleResponse } from "../../utils/handler";
import { create, search, join } from "../../core/home";
import Boom from "@hapi/boom";

const userCreate = async (req, res, next) => {

  const { body } = req;
  const result = await create(body);
  return result;
};


const userJoin = async (req, res, next) => {
  const { userID } = req.body;
  const { homeID } = req.params;
  const joiner = await join( userID, homeID);
  return joiner;
};

const userSearch = async (req, res, next) => {
  const result = await search(req.query.name);
  return result;
}

export default {
  userCreate: handleResponse(userCreate),
  userSearch: handleResponse(userSearch),
  userJoin: handleResponse(userJoin)
};

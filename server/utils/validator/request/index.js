import Boom from "@hapi/boom";
const requestValidator = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  return error ? res.send(Boom.badRequest(error).output.payload) : next();
};

export default requestValidator;

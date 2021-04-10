import Boom from "@hapi/boom";
import responseFormatter from "../formatter";
const errorHandler = (err, req, res, next) => {
  if (!err) return next();
  err = Boom.isBoom(err) ? err : Boom.boomify(err);
  console.log("ERROR STACK=>", err.stack);
  const payload = responseFormatter(true, err);
  res.status(payload.statusCode).json(payload);
};
export default errorHandler;

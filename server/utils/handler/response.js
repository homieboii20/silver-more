import responseFormatter from "../formatter";
const handleResponse = (action) => {
  return async (req, res, next) => {
    try {
      const result = await action(req, res);
      const payload = responseFormatter(false, result);
      if (result === null || result === undefined) {
        payload.statusCode = 204;
      }
      return res.status(payload.statusCode).json(payload);
    } catch (error) {
      next(error);
    }
  };
};

export default handleResponse;

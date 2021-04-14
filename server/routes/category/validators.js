import Joi from "joi";
import requestValidator from "../../utils/validator/request";
const createSchema = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

  pcs: Joi.number().required(),
  totalWeight: Joi.number().required(),
  pricePerGram: Joi.number().required()
});

export default {
  createValidator: requestValidator(createSchema)
};

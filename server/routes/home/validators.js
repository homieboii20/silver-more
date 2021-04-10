import Joi from "../../utils/joi";
import requestValidator from "../../utils/validator/request";
const createSchema = Joi.object({

  user_id: Joi.objectId().required(),
  home_name: Joi.string().required()

});

const joinSchema = Joi.object({
  userID: Joi.objectId().required()
});

export default {
  createValidator: requestValidator(createSchema),
  joinValidator: requestValidator(joinSchema)
};

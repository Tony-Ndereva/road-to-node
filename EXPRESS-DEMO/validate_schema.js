const Joi = require("joi");

const AuthSchema = Joi.object({
  name: Joi.string().min(3).lowercase().required(),
});

const VidlySchema = Joi.object({
  type: Joi.string().lowercase().required(),
});
module.exports = { AuthSchema, VidlySchema };

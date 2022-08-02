const Joi = require("joi");

const AuthSchema = Joi.object({
  name: Joi.string().min(3).lowercase().required(),
});

const VidlySchema = Joi.object({
  name: Joi.string().lowercase().required(),
  isGold: Joi.boolean(),
});
module.exports = { AuthSchema, VidlySchema };

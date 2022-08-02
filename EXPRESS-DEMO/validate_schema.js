const Joi = require("joi");

const AuthSchema = Joi.object({
  name: Joi.string().min(3).lowercase().required(),
});

const genre_VidlySchema = Joi.object({
  name: Joi.string().lowercase().required(),
  isGold: Joi.boolean(),
});
const customer_vidlySchema = Joi.object({
  phone: Joi.number().required(),
  isGold: Joi.boolean(),
  name: Joi.string().lowercase().required(),
});
module.exports = { AuthSchema, genre_VidlySchema, customer_vidlySchema };

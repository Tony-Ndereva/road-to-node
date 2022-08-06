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

const movie_vidlySchema = Joi.object({
  title: Joi.string().min(5).max(50).required(),
  genreId: Joi.string().required(),
  numberInStock: Joi.number().min(0).required(),
  dailyRentalRate: Joi.number().min(0).required(),
});
module.exports = {
  AuthSchema,
  genre_VidlySchema,
  customer_vidlySchema,
  movie_vidlySchema,
};

const Joi = require("joi");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: 255,
    minlength: 2,
  },
  password: {
    type: String,
    required: true,
    maxlength: 255,
    minlength:5,
  },
});

const User = mongoose.model("Users", userSchema);
exports.User = User;

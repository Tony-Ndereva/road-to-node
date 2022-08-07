const { Router } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const route = express.Router();
const { user_vidlySchema } = require("../../EXPRESS-DEMO/validate_schema");
const { User } = require("../models/user");

route.post("/", async (req, res) => {
  const results = user_vidlySchema.validate(req.body);
  if (results.error)
    return res.status(400).send(results.error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered");

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  await user.save();
  res.send();
});

module.exports = route;

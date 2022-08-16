const { Router } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const route = express.Router();
const { auth_vidlySchema } = require("../../EXPRESS-DEMO/validate_schema");
const { User } = require("../models/user");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");

route.post("/", async (req, res) => {
  const results = auth_vidlySchema.validate(req.body);
  if (results.error)
    return res.status(400).send(results.error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid e-mail or password");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid e-mail or password");

  const token = user.generateAuthToken();
  res.send(token);
});

module.exports = route;

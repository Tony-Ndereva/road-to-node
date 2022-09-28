const express = require("express");
const route = express.Router();

route.post("/", (req, res) => {
  res.status(401).send("Unauthorised");
});
module.exports = route;

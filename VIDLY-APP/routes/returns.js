const express = require("express");
const { Rental } = require("../models/rental");
const route = express.Router();
const auth = require("../middleware/auth");
route.post("/", auth, async (req, res) => {
  if (!req.body.customerId)
    return res.status(400).send("customerId is not provided");
  if (!req.body.movieId) return res.status(400).send("movieId is not provided");

  const rental = await Rental.findOne({
    "customer._id": req.body.customerId,
    "movie._id": req.body.movieId,
  });
  if (!rental) return res.status(404).send("no rental found for this customer");

  if (rental.dateReturned)
    return res.status(400).send("Return already processed");
  rental.dateReturned = new Date();
  await rental.save();
  return res.status(200).send("Rental found");
});

module.exports = route;

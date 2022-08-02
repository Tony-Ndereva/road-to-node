const express = require("express");
const mongoose = require("mongoose");
const route = express.Router();
const { VidlySchema } = require("../../EXPRESS-DEMO/validate_schema");

const customerSchema = new mongoose.Schema({
  isGold: {
    type: Boolean,
    default: false,
  },
  name: String,
  date: { type: Date, default: Date.now },
  phone: Number,
  version: Number,
});

const Customer = mongoose.model("customers", customerSchema);

route.get("/", async (req, res) => {
  const customers = await Customer.find().sort("name");
  res.send(customers);
});

route.get("/:id", async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer) res.status(404).send("There is no course with the given ID");
  res.send(customer);
});
route.post("/", async (req, res) => {
  // route for inserting new customers to the database
  const results = VidlySchema.validate(req.body);
  if (results.error)
    return res.status(404).send(results.error.details[0].message);
  let customer = new Customer({
    name: req.body.name,
    isGold: req.body.isGold,
    phone: req.body.phone,
  });
  customer = await customer.save();
  res.send(customer);
});

route.put("/:id", async (req, res) => {
  // route for updating a customer
  const results = VidlySchema.validate(req.body);
  if (results.error)
    return res.status(404).send(results.error.details[0].message);

  const customer = await Customer.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      isGold: req.body.isGold,
      phone: req.body.phone,
    },
    { new: true }
  );
  res.send(customer);
});

route.delete("/:id", async (req, res) => {
  // Route to handle delete requests
  const customer = await Customer.findByIdAndRemove(req.params.id);
  if (!customer)
    res.status(404).send("The customer with the given ID was not found");
  res.send("The customer was deleted successfuly");
});
module.exports = route;


const express = require("express");
const mongoose = require("mongoose");
const route = express.Router();
const { genre_VidlySchema } = require("../../EXPRESS-DEMO/validate_schema");
const { Genre } = require("../models/genre");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

route.get("/", async (req, res) => {
  // throw new Error("Could not get the genres");
  const genres = await Genre.find().sort("name");
  res.send(genres);
});

route.get("/:id", async (req, res) => {
  const genre = await Genre.findById(req.params.id);
  // const genres = await Genre.find((c) => c.id === parseInt(req.params.id));
  if (!genre)
    return res.status(404).send("The genre with the given ID was not found");
  res.send(genre);
});

route.post("/", auth, async (req, res) => {
  const results = genre_VidlySchema.validate(req.body);
  if (results.error)
    return res.status(404).send(results.error.details[0].message);

  const genre = new Genre({
    name: req.body.name,
  });

  await genre.save();
  res.send(genre);
});

route.put("/:id", async (req, res) => {
  const results = genre_VidlySchema.validate(req.body);
  if (results.error)
    return res.status(404).send(results.error.details[0].message);
  const genre = await Genre.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );
  // const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send("The genre was not found!");

  res.send(genre);
});

route.delete("/:id", [auth, admin], async (req, res) => {
  const genre = await Genre.findByIdAndDelete(req.params.id);
  // const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send("The genre was not found!");

  res.send("Deleted successfully");
});

module.exports = route;



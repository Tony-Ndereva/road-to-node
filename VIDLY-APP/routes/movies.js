const mongoose = require("mongoose");
const { Movie } = require("../models/movie");
const express = require("express");
const route = express.Router();
const { movie_vidlySchema } = require("../../EXPRESS-DEMO/validate_schema");
const Genre = require("../models/genre");

route.get("/", async (req, res) => {
  const movies = await Movie.find();
  res.send(movies);
});
route.get("/:id", async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.send(movie);
});

route.post("/:id", async (req, res) => {
  const results = movie_vidlySchema.validate(req.body);
  if (results.error)
    return res.status(404).send(results.error.details[0].message);
  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send("Invalid Genre.");
  let movie = new Movie({
    title: req.body.title,
    genre: {
      _id: genre._id,
      name: genre.name,
    },
    numberInStock: req.body.numberInStock,
    dailyRentalRate: req.body.dailyRentalRate,
  });
  movie = await movie.save();
  res.send(movie);
});
route.put("/:id", async (req, res) => {
  const results = movie_vidlySchema.validate(req.body);
  if (results.error)
    return res.status(404).send(results.error.details[0].message);
  const genre = Genre.findById(req.body.genreId);
  if (!genre) res.status(404).send("Invalid Genre");

  const movie = await Genre.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      genre: {
        _id: genre._id,
        name: genre.name,
      },
      numberInStock: req.body.numberInStock,
      dailyRentalRate: req.body.dailyRentalRate,
    },
    { new: true }
  );

  if (!movie)
    res.status(404).send("The course with the given ID was not found");
  res.send(movie);
});

route.delete("/:id", async (req, res) => {
  const movie = Movie.findByIdAndRemove(req.params.id);
  if (!movie)
    res.status(404).send("The course with the given ID was not found");
  res.send(`course ${movie} deleted`);
});

module.exports = route;
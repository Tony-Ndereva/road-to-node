const express = require("express");
const route = express.Router();
const { VidlySchema } = require("../../EXPRESS-DEMO/validate_schema");

const genres = [];

route.post("/", (req, res) => {
  const results = VidlySchema.validate(req.body);
  if (results.error)
    return res.status(404).send(results.error.details[0].message);

  const genre = {
    id: genres.length + 1,
    type: req.body.type,
  };

  genres.push(genre);
  res.send(genre);
});

route.get("/", (req, res) => {
  res.send(genres);
});

route.get("/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  res.send(genres);
});

route.put("/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send("The genre was not found!");

  const results = VidlySchema.validate(req.body);
  if (results.error)
    return res.status(404).send(results.error.details[0].message);
  genre.type = req.body.type;
  res.send(genre);
});

route.delete("/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send("The genre was not found!");

  const index = genres.indexOf(genre);
  genres.splice(index, 1);
  res.send("Deleted successfully");
});

module.exports = route;

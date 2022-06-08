const express = require("express");
const app = express();
app.use(express.json());
const { VidlySchema } = require("../EXPRESS-DEMO/validate_schema");

// Since we are not working with a database,
// (cont..) we create an empty array to store our data
const genres = [];

app.post("/api/genres", (req, res) => {
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

app.get("/api/genres", (req, res) => {
  res.send(genres);
});

app.get("/api/genres/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  res.send(genres);
});

app.put("/api/genres/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send("The genre was not found!");

  const results = VidlySchema.validate(req.body);
  if (results.error)
    return res.status(404).send(results.error.details[0].message);
  genre.type = req.body.type;
  res.send(genre);
});

app.delete("/api/genres/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send("The genre was not found!");

  const index = genres.indexOf(genre);
  genres.splice(index, 1);
  res.send("Deleted successfully");
});
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

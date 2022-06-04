const express = require("express");
const app = express();
app.use(express.json());

const genres = [];

app.post("/api/genres", (req, res) => {
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
  genre.type = req.body.type;
  res.send(genre);
});

app.delete("/api/genres/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  const index = genres.indexOf(genre);
  genres.splice(index, 1);
  res.send("Deleted successfully");
});
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

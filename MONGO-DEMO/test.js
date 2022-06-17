const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/movies")
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Failed to connect to database"));

const movieSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, Default: Date.now },
});

const Movie = mongoose.model("movie", movieSchema);

async function createMovie() {
  const movie = new Movie({
    name: "Fortnite",
    author: "Hitler",
    tags: ["Latest", "series"],
    isReleased: true,
  });
  const result = await movie.save();
  console.log(result);
}
createMovie();

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/novels")
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log("Failed to connect to database", err));

const novelSchema = new mongoose.Schema({
  title: String,
  pages: Number,
  author: String,
  tags: [String],
  isPublished: Boolean,
  date: { type: Date, Default: Date.now },
});

const Novel = new mongoose.model("Novel", novelSchema);
async function createNovel() {
  const novel = new Novel({
    title: "50 Shades",
    pages: 2544,
    author: "Unknown Author",
    tags: ["Romance", "Love"],
    isPublished: true,
  });
  const result = await novel.save();
  if (result) console.log(`Created a new database`);
}
createNovel();

const { date, boolean } = require("joi");
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("connected to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: date, default: date.now },
  isPublished: boolean,
});

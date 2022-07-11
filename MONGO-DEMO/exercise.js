const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("connected to database"))
  .catch((err) => console.Console.log("Failed to connect to database", err));

const courseSchema = new mongoose.Schema({
  tags: [String],
  date: { type: Date, default: Date.now },
  name: String,
  isPublished: Boolean,
  price: Number,
  version: Number,
});
const Course = mongoose.model("courses", courseSchema);

async function getCourses() {
  const courses = await Course.find({ isPublished: true }, { tags: "backend" })
    .sort({ name: 1 })
    .select({ name: 1, author: 1 });
  console.log(courses);
}
getCourses();

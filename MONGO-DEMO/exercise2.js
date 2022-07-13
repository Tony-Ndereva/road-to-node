const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log("Failed to connect to database", err));

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
  const course = await Course.find()
    .or([{ tags: "frontend" }, { tags: "backend" }])
    .sort({ price: -1 })
    .select({ name: 1, author: 1, price: 1 });
  console.log(course);
}
getCourses();

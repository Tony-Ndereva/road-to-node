const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log("Failed to connect to the database", err));

const courseSchema = new mongoose.Schema({
  tags: [String],
  date: { type: Date, default: Date.now },
  name: String,
  isPublished: Boolean,
  price: Number,
  version: Number,
});

const Course = mongoose.model("Courses", courseSchema);

async function getCourses() {
  return await Course.find({ isPublished: true }).or([
    { price: { $gte: 15 } },
    { name: /.*by.*/i },
  ]);
}
async function run() {
  const courses = await getCourses();

  console.log(courses);
}
run();

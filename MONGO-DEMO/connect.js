const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Failed to connect to database", err));

// Creating a schema for our courseDatabase
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

async function createCourses() {
  const course = new Course({
    name: "node-js course",
    author: "tony",
    tags: ["back-end"],
    isPublished: true,
  });
  const result = await course.save();
  // console.log(result);
}
async function getCourses() {
  // const courses = await Course.find({ author: "tony", isPublished: true })
  //   .limit(10)
  //   .sort({ name: 1 })
  //   .select({ name: 1, tags: 1 });
  // console.log(courses);
  // const course = await Course.find().or([
  //   { author: "tony" },
  //   { isPublished: true },
  // ]);
  const courses = await Course.find({ author: /.*tony*./ });
  console.log(courses);
}

getCourses();

// Complex query operators
// eq (equal)
//ne (not equal)
// gt(greater than)
// gte(greater than or equal to)
// lt (less than)
// lte (less than or equal to)
// in
//nin (not in)

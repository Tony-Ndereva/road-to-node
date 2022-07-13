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
  const pageNumber = 2;
  const pageSize = 10;
  // /api/courses?pageNumber=2&pageSize=10
  const courses = await Course.find({ author: "tony", isPublished: true })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);

  //   const courses = await Course.find({ author: /.*tony*./ });

  //   //        At beginning
  //   // => author:/^tony/
  //   //        At End
  //   // => author: /tony$/
  //   //        At anywhere
  //   // =>author: /.*tony*./
  //   console.log(courses);
  //
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

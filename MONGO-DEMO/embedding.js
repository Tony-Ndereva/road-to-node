const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String,
});

const courseSchema = new mongoose.Schema({
  name: String,
  authors: [authorSchema],
});

const Course = mongoose.model("Course", courseSchema);
const Author = mongoose.model("Author", authorSchema);

async function createCourse(name, authors) {
  const course = new Course({
    name,
    authors,
  });

  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course.find();
  console.log(courses);
}

// createCourse("Node Course", [
//   new Author({ name: "Mosh" }),
//   new Author({ name: "John" }),
// ]);

// async function updateAuthor(courseId) {
//   const course = await Course.findByIdAndUpdate(courseId, {
//     $unset: {
//       author: "",
//     },
//   });
// }
// updateAuthor("62ed09a1ecb06bca0e5dabaf");
async function addAuthor(courseId, author) {
  const course = await Course.findById(courseId);
  course.authors.push(author);
  course.save();
}
// addAuthor("62ed0fed4e3c550e75406815", new Author({ name: "Emily Smith" }));

async function removeAuthor(courseId, authorId) {
  const course = await Course.findById(courseId);
  const author = course.authors.id(authorId);
  author.remove();
  course.save();
}
removeAuthor("62ed0fed4e3c550e75406815", "62ed11cd647da489e792e52c");

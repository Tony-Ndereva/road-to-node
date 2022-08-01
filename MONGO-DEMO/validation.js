const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Failed to connect to the database", err));

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  category: {
    type: String,
    required: true,
    enum: ["skills", "rightstick", "fifa"],
    lowercase: true,
    trim: true,
  },
  price: {
    min: 10,
    max: 200,
    get: (v) => Math.round(v),
    set: (v) => Math.round(v),
    type: Number,
    required: function () {
      return this.isPublished;
    },
  },
  isPublished: Boolean,
  date: { type: Date, default: Date.now },
  tags: {
    type: Array,
    validate: {
      isAsync: true,
      validator: function (v) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const result = v && v.length > 0;
            resolve(result);
          }, 1000);
        });
      },
      message: "A course should have at least one tag",
    },
  },
  version: Number, // 0793740785
});

const Course = mongoose.model("courses", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Fifa 22 Skill moves",
    author: "Tekkz",
    category: "Skills",
    tags: ["skillmoves"],
    price: 52.8,
    isPublished: true,
  });

  try {
    const result = await course.save();
    console.log(result);
  } catch (ex) {
    console.log(ex.message);
  }
}
//createCourse();
async function getCourse(id) {
  const course = await Course.findById(id);
  console.log(course.price)
}

getCourse("62e8468540067f39142afe8d");

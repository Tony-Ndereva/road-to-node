const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const genres = require("./routes/genres");
const customers = require("./routes/customers");
const movies = require("./routes/movies");
const rentals = require("./routes/rentals");
const users = require("./routes/users");
const auth = require("./routes/auth");
// Since we are not working with a database,
// (cont..) we create an empty array to store our data

mongoose
  .connect("mongodb://localhost/vidly")
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Failed to connect to the database", err));

app.use("/api/customers", customers);
app.use("/api/genres", genres);
app.use("/api/movies", movies);
app.use("/api/rentals", rentals);
app.use("/api/users", users);
app.use("/api/auth", auth);
const port = 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

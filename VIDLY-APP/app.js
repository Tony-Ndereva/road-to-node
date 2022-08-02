const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const genre = require("./routes/genres");

// Since we are not working with a database,
// (cont..) we create an empty array to store our data

mongoose
  .connect("mongodb://localhost/vidly")
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Failed to connect to the database", err));

app.use("/api/genres", genre);
const port = 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

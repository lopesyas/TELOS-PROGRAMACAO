const express = require("express");
const app = express();

const movieRoutes = require("./routes/movieRoutes");

app.use(express.json());

app.use("/movies", movieRoutes);

module.exports = app;
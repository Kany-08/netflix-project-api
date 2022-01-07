require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const { movies } = require("./controllers/movies");
//1) all movies route

app.get("/movies", movies);

//2) new movies route

//3) action movies route

//4) find movie by id

/*
app.get("/tv-shows", (req, res) => {
  res.send("Tv Shows!");
});*/

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

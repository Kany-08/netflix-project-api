const { movies } = require("../models/movies");

// export
exports.movies = (req, res) => {
  res.send(movies);
};

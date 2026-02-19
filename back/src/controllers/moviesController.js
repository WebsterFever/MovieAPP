const moviesService = require('../services/movieService');

module.exports = {
  getAllMovies: async (req, res) => {
    try {
      const movies = await moviesService.getMovies();
      res.status(200).json(movies);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  createMovie: async (req, res) => {
    try {
      const movieData = req.body;
      const newMovie = await moviesService.createMovie(movieData);
      res.status(201).json(newMovie);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    } 
    }
};

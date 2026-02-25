
const moviesService = require("../services/movieService"); 

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
      const { title, year, director, duration, genre, rate, poster } = req.body;
      const movieData = { title, year, director, duration, genre, rate, poster };
      const newMovie = await moviesService.createMovie(movieData);
      res.status(201).json(newMovie);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    } 
  },

  deleteMovie: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedMovie = await moviesService.deleteMovie(id);
      
      if (!deletedMovie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      
      res.status(200).json({ message: "Movie deleted successfully", movie: deletedMovie });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

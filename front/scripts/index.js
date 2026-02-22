const renderCards = require("./renderCards");
const axios = require("axios");
const initForm = require("./form");

// wait for DOM once
document.addEventListener("DOMContentLoaded", () => {

  // Initialize form if we're on form page
  initForm();

  // Fetch movies (only if container exists)
  const moviesContainer = document.getElementById("moviesContainer");

  if (moviesContainer) {
    fetchMovies();
  }
});

const fetchMovies = async () => {
  try {
    const response = await axios.get("http://localhost:3000/movies");
    renderCards(response.data);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

const renderCards = require("./renderCards");
const axios = require("axios");
const initForm = require("./form");


document.addEventListener("DOMContentLoaded", () => {

  initForm();

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

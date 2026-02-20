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
    console.log(response.data);
    renderCards(response.data);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

/*
const fetchData = () => {
    return axios.get('https://students-api.up.railway.app/movies')
        .then(response => response.data)  
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error; 
        });
}

fetchData()
    .then(data => {
        console.log('Data fetched successfully:', data);  
        renderCards(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
  



/usando ajax
$.get("https://students-api.up.railway.app/movies", (data) => {
 renderCards(data);
 });
*/

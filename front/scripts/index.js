

const renderCards = require("./renderCards");

const axios = require('axios');

//using async await

const fetchMovies = async () => {
    try {
        const response = await axios.get("https://students-api.up.railway.app/movies");  
        console.log(response.data);
        renderCards(response.data);
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
};

fetchMovies();

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

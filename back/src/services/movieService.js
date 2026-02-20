


const movies = [
  {
    id: 1,
    title: "Guardians of the Galaxy Vol. 2",
    year: 2017,
    director: "James Gunn",
    duration: "2h 16min",
    genre: ["Action", "Adventure", "Comedy"],
    rate: 7.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
  },
  {
    id: 2,
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    director: "George Lucas",
    duration: "2h 1min",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rate: 8.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
  },
  {
    id: 3,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    director: "Peter Jackson",
    duration: "2h 58min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
];

let id = 4;

module.exports = {
  getMovies: async () => {
    return movies;
  },

  createMovie: async (movieData) => {
    const newMovie = {
      id: id++,  //iterar
      ...movieData,  //spread operador 
    };

    movies.push(newMovie);
    return newMovie;
  },
};

/*
{
  "title": "Skyscraper",
  "year": 2018,
  "director": "Rawson Marshall Thurber",
  "duration": "1h 42min",
  "genre": ["Action", "Thriller", "Drama"],
  "rate": 5.8,
  "poster": "https://cinedweller.com/wp-content/uploads/2020/06/skyscraper-affiche-400x650.jpg.webp"
}*/

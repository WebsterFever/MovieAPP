import { tempData } from "./tempData.js";

const moviesContainer = document.getElementById("moviesContainer");

tempData.forEach((movie) => {
  // Crear tarjeta
  const movieCard = document.createElement("article");
  movieCard.classList.add("movie-card");

  movieCard.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}">
    <h3 class="movie-title">${movie.title}</h3>
    <p class="movie-year">${movie.year}</p>
    <p class="movie-director"><strong>Director:</strong> ${movie.director}</p>
    <p class="movie-duration"><strong>Duration:</strong> ${movie.duration}</p>
    <p class="movie-genre">
      <strong>Genre:</strong> ${movie.genre.join(", ")}
    </p>
    <p class="movie-rate">⭐ ${movie.rate}</p>
  `;

  // Insertar tarjeta en el contenedor
  moviesContainer.appendChild(movieCard);
});

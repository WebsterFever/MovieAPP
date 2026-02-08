import { tempData } from "./tempData.js";

const moviesContainer = document.getElementById("moviesContainer");

tempData.forEach((movie) => {
  // Card
  const card = document.createElement("div");
  card.classList.add("movie-card");

  // Poster
  const poster = document.createElement("img");
  poster.classList.add("card-image");
  poster.src = movie.poster;
  poster.alt = movie.title;

  // Title
  const title = document.createElement("h3");
  title.classList.add("movie-title");
  title.textContent = movie.title;

  // Year
  const year = document.createElement("p");
  year.classList.add("card-text");
  year.textContent = movie.year;

  // Director
  const director = document.createElement("p");
  director.classList.add("card-text");
  director.innerHTML = `<strong>Director:</strong> ${movie.director}`;

  // Duration
  const duration = document.createElement("p");
  duration.classList.add("card-text");
  duration.innerHTML = `<strong>Duration:</strong> ${movie.duration}`;

  // Genre
  const genre = document.createElement("p");
  genre.classList.add("card-text");
  genre.innerHTML = `<strong>Genre:</strong> ${movie.genre.join(", ")}`;

  // Rate
  const rate = document.createElement("p");
  rate.classList.add("movie-rate");
  rate.textContent = `⭐ ${movie.rate}`;

  // Append tudo no card
  card.appendChild(poster);
  card.appendChild(title);
  card.appendChild(year);
  card.appendChild(director);
  card.appendChild(duration);
  card.appendChild(genre);
  card.appendChild(rate);

  // Append no container
  moviesContainer.appendChild(card);
});

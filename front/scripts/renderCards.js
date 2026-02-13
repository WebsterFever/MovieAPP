const moviesContainer = document.getElementById("moviesContainer");

const renderCards = (movies) => {
  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    const poster = document.createElement("img");
    poster.classList.add("card-image");
    poster.src = movie.poster;
    poster.alt = movie.title;

    const title = document.createElement("h3");
    title.classList.add("movie-title");
    title.textContent = movie.title;

    const year = document.createElement("p");
    year.classList.add("card-text");
    year.textContent = movie.year;

    const director = document.createElement("p");
    director.classList.add("card-text");
    director.innerHTML = `<strong>Director:</strong> ${movie.director}`;

    const duration = document.createElement("p");
    duration.classList.add("card-text");
    duration.innerHTML = `<strong>Duration:</strong> ${movie.duration}`;

    const genre = document.createElement("p");
    genre.classList.add("card-text");
    genre.innerHTML = `<strong>Genre:</strong> ${movie.genre.join(", ")}`;

    const rate = document.createElement("p");
    rate.classList.add("movie-rate");
    rate.textContent = `⭐ ${movie.rate}`;

    card.appendChild(poster);
    card.appendChild(title);
    card.appendChild(year);
    card.appendChild(director);
    card.appendChild(duration);
    card.appendChild(genre);
    card.appendChild(rate);

    moviesContainer.appendChild(card);
  });
};

module.exports =  renderCards ;

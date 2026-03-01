const axios = require("axios");

function initForm() {
    const form = document.querySelector(".form");
    if (!form) return;

    const clearBtn = document.getElementById("clearBtn");
    const genreContainer = document.getElementById("genreContainer");

    const genresList = [
        "Action",
        "Adventure",
        "Comedy",
        "Drama",
        "Fantasy",
        "Horror",
        "Mystery",
        "Thriller",
        "Sci-Fi"
    ];

    genresList.forEach(genre => {
        const label = document.createElement("label");
        label.classList.add("btn", "genre-btn", "m-2");

        label.innerHTML = `
            <input type="checkbox" name="genre" value="${genre}" class="genre-checkbox">
            <span class="checkbox-icon"></span>
            ${genre}
        `;

        genreContainer.appendChild(label);
    });

    function clearForm() {
        form.reset();

        const activeButtons = genreContainer.querySelectorAll(".active");
        activeButtons.forEach(btn => btn.classList.remove("active"));


        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach(error => error.remove());
    }

    if (clearBtn) {
        clearBtn.addEventListener("click", clearForm);
    }


    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const existingError = field.parentElement.querySelector(".error-message");

        if (existingError) {
            existingError.remove();
        }

        const errorDiv = document.createElement("div");
        errorDiv.className = "error-message text-danger small mt-1";
        errorDiv.textContent = message;
        field.parentElement.appendChild(errorDiv);


        field.classList.add("is-invalid");
    }


    function clearFieldError(fieldId) {
        const field = document.getElementById(fieldId);
        field.classList.remove("is-invalid");
        const existingError = field.parentElement.querySelector(".error-message");
        if (existingError) {
            existingError.remove();
        }
    }

    form.addEventListener("submit", async function (event) {
        event.preventDefault();


        const fields = ["title", "year", "director", "duration", "rate", "poster"];
        fields.forEach(field => clearFieldError(field));

        const genreError = document.querySelector(".genre-error");
        if (genreError) genreError.remove();

        const title = document.getElementById("title").value.trim();
        const year = document.getElementById("year").value.trim();
        const director = document.getElementById("director").value.trim();
        const duration = document.getElementById("duration").value.trim();
        const rate = document.getElementById("rate").value.trim();
        const poster = document.getElementById("poster").value.trim();

        const checkedGenres = document.querySelectorAll(
            'input[name="genre"]:checked'
        );

        const genres = Array.from(checkedGenres).map(cb => cb.value);

        let hasErrors = false;


        if (!title) {
            showError("title", "Title is required");
            hasErrors = true;
        } else if (title.length < 2) {
            showError("title", "Title must have at least 2 characters");
            hasErrors = true;
        }

        if (!director) {
            showError("director", "Director is required");
            hasErrors = true;
        } else if (director.length < 2) {
            showError("director", "Director must have at least 2 characters");
            hasErrors = true;
        }


        const currentYear = new Date().getFullYear();
        if (!year) {
            showError("year", "Year is required");
            hasErrors = true;
        } else if (isNaN(year) || year.trim() === "") {
            showError("year", "Year must be a valid number");
            hasErrors = true;
        } else {
            const yearNum = Number(year);
            if (yearNum < 1888 || yearNum > currentYear) {
                showError("year", `Year must be between 1888 and ${currentYear}`);
                hasErrors = true;
            }
        }

        if (!duration) {
            showError("duration", "Duration is required");
            hasErrors = true;
        }


        if (!rate) {
            showError("rate", "Rate is required");
            hasErrors = true;
        } else if (isNaN(rate) || rate.trim() === "") {
            showError("rate", "Rate must be a valid number");
            hasErrors = true;
        } else {
            const rateNum = Number(rate);
            if (rateNum < 0 || rateNum > 10) {
                showError("rate", "Rate must be between 0 and 10");
                hasErrors = true;
            }
        }


        if (!poster) {
            showError("poster", "Poster URL is required");
            hasErrors = true;
        } else {

            const imageRegex = /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i;

            if (!imageRegex.test(poster)) {
                showError("poster", "Poster URL must end with a valid image extension (jpg, jpeg, png, gif, bmp, webp, svg)");
                hasErrors = true;
            }
        }


        if (genres.length === 0) {
            const genreErrorDiv = document.createElement("div");
            genreErrorDiv.className = "genre-error text-danger small mt-2";
            genreErrorDiv.textContent = "Please select at least one genre";
            genreContainer.parentElement.appendChild(genreErrorDiv);
            hasErrors = true;
        }

        if (hasErrors) {
            return;
        }

        const movieData = {
            title,
            year: Number(year),
            director,
            duration,
            genre: genres,
            rate: Number(rate),
            poster
        };

        try {
            const response = await axios.post(
                "https://vagarious-deanna-nearer.ngrok-free.dev/movies",
                movieData,
                {
                    headers: {
                        "ngrok-skip-browser-warning": "true"
                    }
                }
            );

            console.log("Movie created:", response.data);
            alert("Película creada correctamente ✅");

            clearForm();

            window.location.href = "../index.html";

        } catch (error) {
            console.error("Error creating movie:", error);

            if (error.response && error.response.data && error.response.data.error) {
                alert(`Error: ${error.response.data.error}`);
            } else {
                alert("Error al crear la película ❌");
            }
        }
    });
}

module.exports = initForm;
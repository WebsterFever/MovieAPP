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

    // ===== CREATE GENRE BUTTONS (STYLE NOT TOUCHED) =====
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

    // ===== CLEAR FORM =====
    function clearForm() {
        form.reset();

        const activeButtons = genreContainer.querySelectorAll(".active");
        activeButtons.forEach(btn => btn.classList.remove("active"));
    }

    if (clearBtn) {
        clearBtn.addEventListener("click", clearForm);
    }

    // ===== HANDLE SUBMIT (WITH AXIOS POST) =====
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

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

        if (
            !title ||
            !year ||
            !director ||
            !duration ||
            !rate ||
            !poster ||
            genres.length === 0
        ) {
            alert("Todos los campos son obligatorios.");
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
                "http://localhost:3000/movies",
                movieData
            );

            console.log("Movie created:", response.data);
            alert("Película creada correctamente ✅");

            clearForm();

        } catch (error) {
            console.error("Error creating movie:", error);
            alert("Error al crear la película ❌");
        }
    });
}

module.exports = initForm;
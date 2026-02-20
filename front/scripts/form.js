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
    }

    if (clearBtn) {
        clearBtn.addEventListener("click", clearForm);
    }

    form.addEventListener("submit", function (event) {
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
            year,
            director,
            duration,
            genre: genres,
            rate,
            poster
        };

        console.log("Movie created:", movieData);
        alert("Formulario válido ✅");

        clearForm();
    });
}

module.exports = initForm;
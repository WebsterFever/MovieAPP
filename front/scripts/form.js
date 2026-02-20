function initForm() {
    const form = document.querySelector(".form");
    if (!form) return; // prevents crash on pages without form

    const clearBtn = document.getElementById("clearBtn");

    function clearForm() {
        form.reset();
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

        const genreCheckboxes = document.querySelectorAll(
            'input[name="genre"]:checked'
        );
        const genres = Array.from(genreCheckboxes).map(cb => cb.value);

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

        console.log("Película válida:", movieData);
        alert("Formulario válido ✅");

        clearForm();
    });
}

module.exports = initForm;
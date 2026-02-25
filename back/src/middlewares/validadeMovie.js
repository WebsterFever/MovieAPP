const validateMovie = (req, res, next) => {
    const {
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster,
    } = req.body;

    // Required fields validation
    if (!title || !year || !director) {
        return res.status(400).json({
            error: "Title, year, and director are required",
        });
    }

    if (typeof title !== "string" || title.trim().length < 2) {
        return res.status(400).json({
            error: "Title must be a string with at least 2 characters",
        });
    }

    if (typeof director !== "string" || director.trim().length < 2) {
        return res.status(400).json({
            error: "Director must be a string with at least 2 characters",
        });
    }

    if (typeof year !== "number" || year < 1888 || year > new Date().getFullYear()) {
        return res.status(400).json({
            error: "Year must be a valid number",
        });
    }

    if (duration && typeof duration !== "string") {
        return res.status(400).json({
            error: "Duration must be a string",
        });
    }

    if (genre && !Array.isArray(genre)) {
        return res.status(400).json({
            error: "Genre must be an array of strings",
        });
    }

    if (rate && (typeof rate !== "number" || rate < 0 || rate > 10)) {
        return res.status(400).json({
            error: "Rate must be a number between 0 and 10",
        });
    }

    if (poster) {
        if (typeof poster !== "string") {
            return res.status(400).json({
                error: "Poster must be a string (URL)",
            });
        }

        
        const imageRegex = /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i;
        
        if (!imageRegex.test(poster)) {
            return res.status(400).json({
                error: "Poster URL must end with a valid image extension (jpg, jpeg, png, gif, bmp, webp, svg)",
            });
        }
    }

    next();
};

module.exports = validateMovie;
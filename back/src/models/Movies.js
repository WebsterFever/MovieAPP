const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        year: {
            type: Number,
            required: true,
        },
        director: {
            type: String,
            required: true,
            trim: true,
        },
        duration: {
            type: String,
            required: true,
        },
        genre: {
            type: [String],
            required: true,
        },
        rate: {
            type: Number,
            min: 0,
            max: 10,
        },
        poster: {
            type: String,
        },
    },
    {
        timestamps: true, // adds createdAt and updatedAt automatically
    }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
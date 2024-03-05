const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    wideposter: {
        type: String,
        required: true
    },
    potraitposter: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    halls: [{
        type: String,
        required: true
    }],
    languages: [{
        type: String,
        required: true
    }],
    duration: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    releasedate: {
        type: Date,
        required: true
    },
    cast: [{
        name: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        imageurl: {
            type: String,
            required: true
        }
    }],
    about: {
        type: String,
        required: true
    }
});

const Movie = mongoose.model('movies', movieSchema);

module.exports = Movie;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const screenSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    theatreId: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});

const Screen = mongoose.model('Screen', screenSchema);

module.exports = Screen;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const screenSchema = new mongoose.Schema({
    title: { type: String, required: true },
    theatreId: { type: String, required: true },
    location: { type: String, required: true },
    language: { type: String, required: true },
    time: { type: String, required: true },
    screenType: { type: String, required: true },
    screenName: { type: String, required: true },
    seats: {type: Array}
},
{ strict: false }
);



const Screen = mongoose.model('screens', screenSchema);

module.exports = Screen;
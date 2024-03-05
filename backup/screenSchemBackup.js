const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const screenSchema = new mongoose.Schema({
    status: { type: String},
    seat_id: { type: String},
    bookedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});


const rowSchema = new mongoose.Schema({
    rowname: { type: String, required: true },
    cols: [screenSchema] // Array of seats
});


const timeslotSchema = new mongoose.Schema({
    seats: [{
        type: { type: String, required: true },
        rows: [rowSchema], // Array of rows
        price: { type: Number, required: true }
    }]
});



const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    theatreId: { type: String, required: true },
    location: { type: String, required: true },
    language: { type: String, required: true },
    time: { type: String, required: true },
    screenType: { type: String, required: true },
    screenName: { type: String, required: true },
    timeslots: [timeslotSchema] // Array of timeslots
},
{ strict: false }
);



const Screen = mongoose.model('Screen', screenSchema);

module.exports = Screen;
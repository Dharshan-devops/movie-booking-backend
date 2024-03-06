const mongoose = require('mongoose');
const User = require('./userModel');
const Schema = mongoose.Schema;



const screenSchema = new mongoose.Schema({
    title: { type: String, required: true },
    theatreId: { type: String, required: true },
    location: { type: String, required: true },
    language: { type: String, required: true },
    time: { type: String, required: true },
    screenType: { type: String, required: true },
    screenName: { type: String, required: true },
    seats: [{
        seatId: Number,
        status: String,
        bookedBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref: User
        }
    }]
},
{ strict: false }
);



const Screen = mongoose.model('screens', screenSchema);

module.exports = Screen;
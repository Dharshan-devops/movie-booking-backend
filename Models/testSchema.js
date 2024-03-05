const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const testSchema = new mongoose.Schema({
    title: {
        type: String
    },
    seats: Array
});

// Create a model
const Test = mongoose.model('tests', testSchema);

module.exports = Test 
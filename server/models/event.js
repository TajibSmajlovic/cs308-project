const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: String,
    description: String,
    venue: String,
    imgUrl: String,
    dateCreated: { type: Date, default: Date.now() },
    date: String,
    time: String,
})

module.exports = mongoose.model('Event', eventSchema)
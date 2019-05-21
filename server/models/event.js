const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: String,
    description: String,
    venue: String,
    imgUrl: String,
    dateCreated: { type: Date, default: Date.now() },
    date: Date,
    time: String,
    seats: {type: [], default: [
        {
          id: 1,
          user: null
        },
        {
          id: 2,
          user: null
        },
        {
          id: 3,
          user: null
        },
        {
          id: 4,
          user: null
        },
        {
          id: 5,
          user: null
        },
        {
          id: 6,
          user: null
        },
        {
          id: 7,
          user: null
        },
        {
          id: 8,
          user: null
        },
        {
          id: 9,
          user: null
        },
        {
          id: 10,
          user: null
        },
        {
          id: 11,
          user: null
        },
        {
          id: 12,
          user: null
        },
        {
          id: 13,
          user: null
        },
        {
          id: 14,
          user: null
        },
        {
          id: 15,
          user: null
        },
        {
          id: 16,
          user: null
        },
        {
          id: 17,
          user: null
        },
        {
          id: 18,
          user: null
        },
        {
          id: 19,
          user: null
        },
        {
          id: 20,
          user: null
        },
        {
          id: 21,
          user: null
        },
        {
          id: 22,
          user: null
        },
        {
          id: 23,
          user: null
        },
        {
          id: 24,
          user: null
        },
        {
          id: 25,
          user: null
        },
        {
          id: 26,
          user: null
        },
        {
          id: 27,
          user: null
        },
        {
          id: 28,
          user: null
        },
        {
          id: 29,
          user: null
        },
        {
          id: 30,
          user: null
        },
        {
          id: 31,
          user: null
        },
        {
          id: 32,
          user: null
        },
        {
          id: 33,
          user: null
        },
        {
          id: 34,
          user: null
        },
        {
          id: 35,
          user: null
        },
        {
          id: 36,
          user: null
        },
        {
          id: 37,
          user: null
        },
        {
          id: 38,
          user: null
        },
        {
          id: 39,
          user: null
        },
        {
          id: 40,
          user: null
        },
        {
          id: 41,
          user: null
        },
        {
          id: 42,
          user: null
        },
        {
          id: 43,
          user: null
        },
        {
          id: 44,
          user: null
        },
        {
          id: 45,
          user: null
        },
        {
          id: 46,
          user: null
        },
        {
          id: 47,
          user: null
        },
        {
          id: 48,
          user: null
        },
        {
          id: 49,
          user: null
        },
        {
          id: 50,
          user: null
        },
        {
          id: 51,
          user: null
        },
        {
          id: 52,
          user: null
        },
        {
          id: 53,
          user: null
        },
        {
          id: 54,
          user: null
        },
        {
          id: 55,
          user: null
        },
        {
          id: 56,
          user: null
        },
        {
          id: 57,
          user: null
        },
        {
          id: 58,
          user: null
        },
        {
          id: 59,
          user: null
        },
        {
          id: 60,
          user: null
        },
        {
          id: 61,
          user: null
        },
        {
          id: 62,
          user: null
        },
        {
          id: 63,
          user: null
        },
        {
          id: 64,
          user: null
        },
        {
          id: 65,
          user: null
        },
        {
          id: 66,
          user: null
        },
        {
          id: 67,
          user: null
        },
        {
          id: 68,
          user: null
        },
        {
          id: 69,
          user: null
        },
        {
          id: 70,
          user: null
        },
        {
          id: 71,
          user: null
        },
        {
          id: 72,
          user: null
        },
        {
          id: 73,
          user: null
        },
        {
          id: 74,
          user: null
        },
        {
          id: 75,
          user: null
        },
        {
          id: 76,
          user: null
        },
        {
          id: 77,
          user: null
        },
        {
          id: 78,
          user: null
        },
        {
          id: 79,
          user: null
        },
        {
          id: 80,
          user: null
        },
        {
          id: 81,
          user: null
        },
        {
          id: 82,
          user: null
        },
        {
          id: 83,
          user: null
        },
        {
          id: 84,
          user: null
        },
        {
          id: 85,
          user: null
        },
        {
          id: 86,
          user: null
        },
        {
          id: 87,
          user: null
        },
        {
          id: 88,
          user: null
        },
        {
          id: 89,
          user: null
        },
        {
          id: 90,
          user: null
        },
        {
          id: 91,
          user: null
        },
        {
          id: 92,
          user: null
        },
        {
          id: 93,
          user: null
        },
        {
          id: 94,
          user: null
        },
        {
          id: 95,
          user: null
        },
        {
          id: 96,
          user: null
        },
        {
          id: 97,
          user: null
        },
        {
          id: 98,
          user: null
        },
        {
          id: 99,
          user: null
        },
        {
          id: 100,
          user: null
        }
      ]}
})

module.exports = mongoose.model('Event', eventSchema)
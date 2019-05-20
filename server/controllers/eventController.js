const Event = require('../models/event');

const createEvent = async (req, res) => {
    try{
        const eventData = {
            ...req.body,
            date: new Date(req.body.date)
        }
        const event = await new Event(eventData).save();
        res.status(200).json(event);
    }catch(err){
        console.log(err.message);
        res.status(500).end(err.message)
    }
}

const getMostRecent = async (req, res) => {
    try{
        const events = await Event.find({
            date: { "$gte": Date.now() - 2 * 86400000 }
        }).limit(6)
        res.status(200).json(events);
    }catch(err){
        console.log(err.message);
        res.status(500).end(err.message)
    }
}

const getAll = async (req, res) => {
    try{
        const events = await Event.find({}).limit(6)
        res.status(200).json(events);
    }catch(err){
        console.log(err.message);
        res.status(500).end(err.message)
    }
}

module.exports = {
    createEvent,
    getMostRecent,
    getAll,
};
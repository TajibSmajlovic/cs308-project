const Event = require('../models/event');
const nodemailer = require('nodemailer');

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
        const events = await Event.find({}).sort({dateCreated: -1}).limit(6)
        res.status(200).json(events);
    }catch(err){
        console.log(err.message);
        res.status(500).end(err.message)
    }
}

const book = async (req, res) => {
    try{
        await Event.findByIdAndUpdate(req.body.event.id, {
            seats: req.body.seats
        })

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            port: 25,
            secure: false,
            auth: {
                user: 'sjediba@gmail.com',
                pass: 'sjediba123'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        let mailOptions = {
            from: '"sjedi.ba " <sjediba@gmail.com>',
            to: req.body.user.email,
            subject: "Thanks for your purchase !!!",
            text: `Dear ${req.body.user.username}\n\nYou have successfully purchased the following: \n${req.body.purchases.map(num => `Seat ${num}`).join('\n')}\n For the ${req.body.event.title} on ${req.body.event.date} at ${req.body.event.time} in ${req.body.event.venue}\n\nSincerely sjedi.ba\n`
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if(!err){
                res.render('contact', { redirect: true, contact: true })
            }
        })
        res.status(200).json({ msg: 'success' });
    }catch(err){
        console.log(err.message);
        res.status(500).end(err.message)
    }
}

module.exports = {
    createEvent,
    getMostRecent,
    getAll,
    book
};

const router = require('express').Router();
const eventController = require('../controllers/eventController.js');

router.post('/', eventController.createEvent);

router.put('/book', eventController.book)

router.get('/most-recent', eventController.getMostRecent);

router.get('/all', eventController.getAll);

router.get('/cinema', eventController.getCinema);

router.get('/theater', eventController.getTheater);

module.exports = router;

const router = require('express').Router();
const eventController = require('../controllers/eventController.js');

router.post('/', eventController.createEvent);

router.get('/most-recent', eventController.getMostRecent);

router.get('/all', eventController.getAll);

module.exports = router;
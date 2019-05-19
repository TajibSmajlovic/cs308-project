
const router = require('express').Router();
const eventController = require('../controllers/eventController.js');
// const checkAuth = require('../utlity/checkAuth');

router.post('/', eventController.createEvent);

// router.get('/:uri', eventController.getEvent);

router.get('/most-recent', eventController.getMostRecent);

router.get('/all', eventController.getAll);

// router.put('/:id', checkAuth, eventController.editEvent);

// router.delete('/:id', checkAuth, eventController.deleteEvent);

module.exports = router;
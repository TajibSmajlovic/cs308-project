
const router = require('express').Router();
const eventController = require('../controllers/eventController.js');
/*const checkAuth = require('../checkAuth');*/

router.post('/', eventController.createEvent);

router.get('/most-recent', eventController.getMostRecent);

router.get('/all', eventController.getAll);

module.exports = router;
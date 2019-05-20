const router = require('express').Router();
const userController = require('../controllers/userController')
const passport = require('passport');

router.post('/register', userController.registerUser);

router.post('/login', userController.loginUser);

router.get('/:id', userController.getUserById);

module.exports = router;
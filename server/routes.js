const router = require('express').Router();

const eventRouter = require('./routes/eventRouter.js')
// const userRouter = require('./routes/userRouter.js')
// const searchRouter = require('./routes/searchRouter.js');

router.use('/event', eventRouter)
// router.use('/user', userRouter)
// router.use('/search', searchRouter)

module.exports = router;
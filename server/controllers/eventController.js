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

const editEvent = async (req, res) => {
    // try{
    //     const postId = req.params.id
    //     const post = await Post.findById(postId);
    //     if(req.user._id.toString() == post.author){
    //         for(let key in req.body){
    //             post[key] = req.body[key];
    //         }
    //         await post.save();
    //         res.status(200).json(post);
    //     } else {
    //         throw new Error('Unauthorized')
    //     }
    // }catch(err){
    //     console.log(err.message);
    //     res.status(500).end(err.message)
    // }
}

const getEvent = async (req, res) => {
    // try{
    //     const post = await Post
    //         .findOne({ uri: req.params.uri})
    //         .populate({
    //             path: 'comments',
    //             select: 'text author dateCreated',
    //             populate: {
    //                 path: 'author',
    //                 select: 'avatarUrl name surname uri'
    //             }
    //         })
    //         .populate({
    //             path: 'author',
    //             select: 'avatarUrl name surname uri'
    //         });
    //     res.status(200).json(post);
    // }catch(err){
    //     res.status(500).end(err.message)
    // }
}

const deleteEvent = async (req, res) => {
    // try{
    //     const post = await Post.findById(req.params.id);
    //     if(req.user._id.toString() == post.author){
    //         const { imgUrl, comments } = post;
    //         const imgPath = imgUrl.substring(imgUrl.indexOf('images'))
    //         fs.unlinkSync(`public/${imgPath}`);
    //         for(let comment of comments){
    //             await Comment.findByIdAndRemove(comment);
    //         }
    //         await Post.findByIdAndRemove(req.params.id)
    //         res.status(200).json({message: 'Post deleted'});
    //     }else{
    //         throw new Error('Unothorized')
    //     }
    // }catch(err){
    //     console.log(err.message)
    //     res.status(500).json({messageer: err.message})
    // }
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
    getEvent,
    getMostRecent,
    getAll,
    editEvent,
    deleteEvent
};
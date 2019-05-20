const User = require('../models/user');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const localSecret = require('../passport').localSecret

const getUserById = async (req, res) => {
    try{
        const user = await User.findById(req.params.id, {
            password: 0,
        })
        if(!user){
            throw {message: 'User does not exist'}
        }
        res.status(200).json(user);
    }catch(err){
        res.status(500).end(err.message)
    }
}

const registerUser = async (req, res) => {
    try{
        req.body.password = User.hashPassword(req.body.password);
        const user = await new User({ ...req.body })
            .save();
        const token = jwt.sign(user.toJSON(), localSecret);
        res.status(200).json({user, token});
    } catch(err) {
        let msg = err.message;
        if(err.code === 11000){
            msg = 'User already exists'
        }
        console.log(msg)
        res.status(500).json({message: msg})
    }
}

const loginUser = async (req, res) => {
        passport.authenticate('local', {session: false}, (err, user, info) => {
            if (err || !user) {
                return res.status(400).json(info);
            }
            req.login(user, {session: false}, (err) => {
                if (err) {
                    res.send(err);
                }
                const retUser = {
                    _id: user._id,
                    email: user.email,
                    username: user.username,
                    role: user.role
                }
                const token = jwt.sign(JSON.stringify(retUser), localSecret);
                return res.status(200).json({user: retUser, token});
            });
        })(req, res);
}

module.exports = {
    getUserById,
    loginUser,
    registerUser,
}
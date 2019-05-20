const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String },
    email: { type: String, unique: true }, 
    password: { type: String },
    role: { type: String, default: 'usr' }
})

userSchema.statics.hashPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

userSchema.statics.comparePassword = (guess, hash) => {
    return bcrypt.compareSync(guess, hash);
}

module.exports = mongoose.model('User', userSchema)
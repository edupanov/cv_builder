const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const userSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    surname: {type: String, required: true},
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

module.exports = {userSchema, User}
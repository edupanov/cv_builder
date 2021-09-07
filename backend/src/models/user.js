const mongoose = require('mongoose')
const {Schema} = require('mongoose')
const cvSchema = require('./resume').cvSchema

const userSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    cvs: [cvSchema]
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

module.exports = {userSchema, User}
const mongoose = require('mongoose')
const Schema = require('mongoose').Schema

const cvSchema = new Schema({
    resume: {type: Object, require: true}
}, {timestamps: true})

const Cv = mongoose.model('Cv', cvSchema)

module.exports = {cvSchema, Cv}
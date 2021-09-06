const mongoose = require('mongoose')
const Schema = require('mongoose').Schema

const cvSchema = new Schema({
    data: {type: Object, require: true}
}, {timestamps: true})

const Cv = mongoose.model('Cv', cvSchema)

module.exports = {cvSchema, Cv}
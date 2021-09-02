const mongoose = require('mongoose')
const Schema = require('mongoose').Schema

const resumeSchema = new Schema({
    data: {type: JSON, require: true}
})

const Resume = mongoose.model('Resume', resumeSchema)

module.exports = {resumeSchema, Resume}
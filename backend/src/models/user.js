const mongoose = require('mongoose')
const {Schema} = require('mongoose')
const ResumeSchema = require('./resume')

const userSchema = new Schema({
    resume: [ResumeSchema]
})
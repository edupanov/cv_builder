const User = require('../models/user')
const Resume = require('../models/resume').Resume
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

module.exports = {
    saveResume: async (req, res, next) => {
        let newResume = req.body.resume

        await Resume.create(newResume)
            .then(async resume => {
                resume.create()
                    .then(resume => {
                        if (resume._id){
                            res.status(200).json({message: 'Resume was created successfully!'})
                        }
                    })
            })
            .catch(error => {
                res.status(500).json({
                    message: 'Fetching resume failed!',
                    error
                })
            })

    }
}
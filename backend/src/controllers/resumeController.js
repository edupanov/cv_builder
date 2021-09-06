const Cv = require('../models/resume').Cv
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

module.exports = {
    saveResume: async (req, res, next) => {
        let newResume = req.body

        await Cv.create({data: newResume})
            .then(resume => {
                if (resume._id) {
                    res.status(200).json({
                        message: 'Resume was created successfully!',
                        resume
                    })
                }
            })
            .catch(error => {
                res.status(500).json({
                    message: 'Fetching resume failed!',
                    error
                })
            })

    },

    // getResume: async (req, res, next => {
    //
    // })
}
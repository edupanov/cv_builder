const Cv = require('../models/resume').Cv
const User = require('../models/user').User

module.exports = {
    saveResume: async (req, res, next) => {
        const newResume = req.body.resume
        await Cv.create({resume: newResume})
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

    saveUserResume: async (req, res, next) => {
        const newResume = req.body.resume
        const userId = req.body.userId
        await User.findById({_id: userId})
            .then(async user => {
                if(user._id) {
                     Cv.create({resume: newResume})
                        .then(resume => {
                            if (resume._id) {
                                user.cvs.push(resume)
                                user.save()
                                    .then(user => {
                                        if(user._id) {

                                            res.status(200).json({
                                                status: 200,
                                                isSuccess: true,
                                                message: 'Resume added successfully!',
                                                user

                                            })
                                        }
                                    })
                            }
                        })


                } else {
                    res.status(404).json({
                        message: `User with id ${userId} not found!`
                    })
                }

            })
            .catch(err => {
                res.status(500).json({
                    message: 'Server error, please try again',
                    err
                })
            })
    },

}
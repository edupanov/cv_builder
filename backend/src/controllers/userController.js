const User = require('../models/user').User
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')

module.exports = {
    registration: async (req, res, next) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: 'Uncorrect request', errors
            })
        }

        const {email, password, name, surname} = req.body

        const candidate = await User.findOne({email})

        if (candidate) {
            return res.status(400).json({
                message: `User with email ${email} already exist`,
                isSuccess: false
            })
        }
        const hashPassword = await bcrypt.hash(password, 8)
        const newUser = {email, password: hashPassword, name, surname}

        await User.create(newUser)
            .then(user => {
                if (user._id) {
                    res.status(200).json({
                        message: 'User was created successfully!',
                        isSuccess: true,
                        user
                    })
                }
            })
            .catch(error => {
                res.status(500).json({
                    message: 'Fetching user failed!',
                    isSuccess: false,
                    error
                })
            })
    },

    login: async (req, res, next) => {

        const {email, password} = req.body

        const user = await User.findOne({email})

        if (!user) {
            return res.status(404).json({
                message: `User not found`,
                isSuccess: false
            })
        }
        const isPassValid = await bcrypt.compareSync(password, user.password)

        if (!isPassValid) {
            return res.status(400).json({
                message: `Invalid password`,
                isSuccess: false
            })
        }

        const token = jwt.sign({id: user.id}, process.env.JWT_KEY, {expiresIn: '1h'})
        return res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                surname: user.surname
            }
        })

    },

    getResume: async (req, res, next) => {
        const {email} = req.body
        console.log(email)

        await User.find({email: 'edupanov@gmail.com'})
            .populate(['cvs'])
            .then(async documents => {
                const users = documents.map(resume => {
                    let cvs = []
                    if (resume.cvs && resume.cvs.length > 0) {
                        cvs = resume.cvs.map(cv => {
                            return {
                                resume: cv
                            }
                        })
                    }
                    return {
                        cvs
                    }
                })
                res.status(200).json({
                    code: 200,
                    isSuccess: true,
                    message: 'User fetched successfully!',
                    data: users
                })
            })
            .catch(error => {
                res.status(500).json({
                    message: 'Fetching user failed!',
                    error
                })
            })
    }

}
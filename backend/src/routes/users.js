const express = require('express')
const UserController = require('../controllers/userController')
const ResumeController = require('../controllers/resumeController')
const {check} = require('express-validator')


const router = express.Router()

router.post('/save', ResumeController.saveResume)
router.post('/registration',
    [
        check('email', 'Uncorrect email').isEmail(),
        check('password', 'Password must be longer than 3 and shorted than 12').isLength({min: 3, max: 12}),
    ],
    UserController.registration)
router.post('/login', UserController.login)

module.exports = router
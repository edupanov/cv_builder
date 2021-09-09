const express = require('express')
const UserController = require('../controllers/userController')
const ResumeController = require('../controllers/resumeController')
const {check} = require('express-validator')


const router = express.Router()

router.post('/save', ResumeController.saveUserResume)
router.post('/login', UserController.login)
router.post('/get', UserController.getResume)
router.post('/registration',
    [
        check('email', 'Uncorrect email').isEmail(),
        check('password', 'Password must be longer than 3 and shorted than 12').isLength({min: 3, max: 12}),
    ],
    UserController.registration)

module.exports = router
const express = require('express')
const UserController = require('../controllers/userController')

const router = express.Router()

router.post('/save', UserController.saveResume)

module.exports = router
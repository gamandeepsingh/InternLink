const express = require('express')
const { userOtpSend } = require('../controllers/userController')
const router = express.Router()


// routes
router.post('/user/sendotp',userOtpSend)
router.post('/user/verify',userLogin)


module.exports = router
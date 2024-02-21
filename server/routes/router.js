const express = require('express')
const { userOtpSend, userData, userLogin } = require('../controllers/userController')
const router = express.Router()


// routes
router.post('/user/profile',userData)
router.post('/user/sendotp',userOtpSend)
router.post('/user/verify',userLogin)


module.exports = router
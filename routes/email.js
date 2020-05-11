const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')


router.put('/sendemail',ctrl.email.sendEmail)

module.exports = router
const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

router.get('/categories',ctrl.category.getAllCategory)

module.exports = router
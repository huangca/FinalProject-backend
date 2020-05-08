const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

router.get('/products/',ctrl.product.getAllProducts)
router.get('/products/:categoryId',ctrl.product.getProductByCategory)

module.exports=router
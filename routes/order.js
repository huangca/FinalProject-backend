const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

router.post('/createorder',ctrl.order.placeOrder)
router.get('/getorders/:id',ctrl.order.getOrders)
router.get('/getorderdetail/:orderId',ctrl.order.getOrderDetail)

module.exports = router
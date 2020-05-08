const db = require('../models')

const placeOrder=(req,res)=>{
	const newOrder={
		user:req.body.user,
		amount:req.body.amount
	}
	db.Order.create(newOrder,(err,savedOrder)=>{
		if(err)  return res.status(510).json({status:510, message : `There is a problem with creatin order ${err}`});
		for(item of req.body.cartItems){
			let newDetail={
				order:savedOrder._id,
				product:item._id,
				price:item.price,
				quantity:item.count
			}
			db.OrderDetail.create(newDetail,(err,saveDetail)=>{
				 if(err)  return res.status(510).json({status:510, message : `There is a problem with creatin order detail ${err}`});
				 //res.json(saveDetail)
			})

			db.Product.findByIdAndUpdate(newDetail.product,{$inc:{stock:-newDetail.quantity}},(err,saveProduct)=>{
				 if(err)  return res.status(510).json({status:510, message : `There is a problem with product update ${err}`});
			})
		}
		res.json(savedOrder)

	})
}

const getOrders=(req,res)=>{
	db.Order.find({user:req.params.id},(err,foundOrder)=>{
		if(err)  return res.status(510).json({status:510, message : `There is a problem with creatin order detail ${err}`});
		res.json(foundOrder)
	})
}


const getOrderDetail=(req,res)=>{
	db.OrderDetail.find({order:req.params.orderId}).populate('product','name').
		exec((err,foundOrderDetail)=>{
			if(err)  return res.status(510).json({status:510, message : `There is a problem with find orderDetail ${err}`});
			
			res.json(foundOrderDetail);
		})

}


module.exports  = {
   placeOrder,
   getOrders,
   getOrderDetail
}
const mongoose = require("mongoose");

const OrderDetailSchema=mongoose.Schema({
	order:{
		type:mongoose.Schema.Types.ObjectId,
        ref:'Order'
	},
	product:{
		type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
	},
	price:{
		type:Number,
		required:true
	},
	quantity:{
		type:Number,
		required:true
	},

})
const OrderDetail=mongoose.model('OrderDetail',OrderDetailSchema);
module.exports=OrderDetail
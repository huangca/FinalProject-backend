const mongoose = require('mongoose')

const OrderSchema=mongoose.Schema({
	user:{
		type:mongoose.Schema.Types.ObjectId,
        ref:'User'
	},
	amount:{
		type:Number,
		required:true
	},
	createdAt: {
        type: Date,
        default: Date.now
    },

})

const Order=mongoose.model('Order',OrderSchema);
module.exports=Order
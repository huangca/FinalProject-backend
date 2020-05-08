const mongoose = require('mongoose')

const ProductSchema=mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	description:String,
	price:Number,
	stock:{
		type:Number,
		default:0
	},
	category:{
		type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
	},
	image:String,
})

const Product=mongoose.model('Product',ProductSchema);

module.exports=Product
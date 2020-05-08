const db = require('../models')

const getAllProducts=(req,res)=>{
	db.Product.find({},(err,foundProducts)=>{
		if(err){
			 return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
		}
		res.json(foundProducts)
	})
}

const getProductByCategory=(req,res)=>{
	db.Product.find({category:req.params.categoryId},(err,foundProducts)=>{
		if(err){
			 return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
		}
		res.json(foundProducts)
	})
}

module.exports={
	getAllProducts,
	getProductByCategory,
}
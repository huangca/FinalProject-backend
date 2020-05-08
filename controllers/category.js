const db = require('../models')

const getAllCategory=(req,res)=>{
	db.Category.find({},(err,allCategory)=>{
		if(err){
		return res.status(400).json({
                staus: 400,
                message: err
            })
	}
		res.json(allCategory)
	})
}


module.exports  = {
   getAllCategory
}
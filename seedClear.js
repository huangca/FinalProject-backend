const mongoose = require('mongoose');
const db =  require('./models');


db.Product.deleteMany({}, (err, result) => {
  if (err) {
    console.log(err);
  }
  db.Category.deleteMany({},(err,resultCategory)=>{
  	if (err) {
    console.log(err);
  }
  	console.log("success delete");
  	process.exit();

	});

});
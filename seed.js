const mongoose = require('mongoose');
const db =  require('./models');



const categories=[
	{
		name:'video game'
	},
	{
		name:'clothes'
	},
	{
		name:'electronic'
	}
]




db.Category.create(categories,(err,newCategory)=>{
	 if (err) {
      console.log(err);
      process.exit();
    }
     console.log(`Successfully created ${newCategory.length} category.`);

     const items=[
     {	
     	name:'ff7',
     	description:'relase at 1997',
     	price:40,
     	stock:1,
     	category:newCategory[0]._id,
     	image:'/images/ff7.jpg'
     },
     {
     	name:'shooting game',
     	description:'make by myself',
     	price:10,
     	stock:1,
     	category:newCategory[0]._id,
     	image:'/images/Selection_001.png'
     },
     {
        name:'jacket',
        description:'leave unused',
        price:60,
        stock:2,
        category:newCategory[1]._id,
        image:'./images/jaket.jpeg'
     },
     {
        name:'DC',
        description:'leave unused DC',
        price:200,
        stock:1,
        category:newCategory[2]._id,
        image:'./images/6334292_sd.jpg'
     }
     
     ];
     db.Product.create(items,(err,newItems)=>{
            if (err) {
            console.log(err);
            process.exit();
        }
        console.log(`Successfully created ${newItems.length} products.`);
     })


     process.exit();
});


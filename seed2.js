const mongoose = require('mongoose');
const db =  require('./models');

db.Category.find({},(err,allCategory)=>{
            if(err) {
            return res.status(400).json({
                staus: 400,
                message: err
            })
        }
        console.log(allCategory)
    const items=[
     {  
        name:'ff6',
        description:'relase at 1994',
        price:40,
        stock:1,
        category:allCategory[0]._id,
        image:'https://cdn.vox-cdn.com/thumbor/-FmBUhiBIMlpMGFS36VpZ5crPQk=/0x0:2000x1404/920x613/filters:focal(489x37:809x357):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/55451237/FF6.0.jpg'
     },
     {
        name:'chrono trigger',
        description:'best jrpg ever',
        price:10,
        stock:1,
        category:allCategory[0]._id,
        image:'https://i.imgur.com/tkaQskh.jpg'
     },
     {
        name:'jacket',
        description:'leave unused',
        price:60,
        stock:3,
        category:allCategory[1]._id,
        image:'https://i.imgur.com/deXukeV.jpg'
     },
     {
        name:'DC',
        description:'leave unused DC',
        price:200,
        stock:2,
        category:allCategory[2]._id,
        image:'https://i.imgur.com/52BlRa4.jpg'
     }
     
     ];
     console.log(items);
    db.Product.create(items,(err,newItems)=>{
            if (err) {
            console.log(err);
            process.exit();
        }
        console.log(`Successfully created ${newItems.length} products.`);
           process.exit();
     })


    // process.exit();
})
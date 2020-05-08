const mongoose = require('mongoose')
const dbUrl = process.env.MONGODB_URI||"mongodb://localhost:27017/ecommerce"

mongoose.connect(dbUrl, {
    useNewUrlParser : true,
    useFindAndModify : false,
    useCreateIndex : true,
    useUnifiedTopology : true
}) 
    .then(()=> console.log("MongoDB Connected .."))
    .catch((err)=> console.log(`There is an ${err}`))


module.exports = {
    User : require('./User'),
    Category : require('./Category'),
    Order : require('./Order'),
    OrderDetail:require('./OrderDetail'),
    Product:require('./Product')
}
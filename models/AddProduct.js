const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AddProduct = new Schema({
    product: String,
    instock:Number,
    ware_house:String,
    }
    ,{collection:'addproducts'
    });

module.exports=mongoose.model('AddProduct',AddProduct);
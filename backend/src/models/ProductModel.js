const mongoose = require('mongoose')

const { Schema } = mongoose;

const ProductSchema = new Schema({
 
    name : { type: String},
    description: {type: String},
    size:{type:String},
    price:{type:Number},
    rating:{type:Number},
    stock:{type:Number}
});

module.exports = mongoose.model("Product",ProductSchema);
const mongoose = require('mongoose')
const { Schema } = mongoose;

const ProductSchema = new Schema({
 
    name : { 
        type: String,
        required: true
    },
    description: {
        type: String
    },
    size:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    rating:{
        type:Number
    },
    stock:{
        type:Number,
        required: true,
    }
});

module.exports = mongoose.model("Product",ProductSchema);
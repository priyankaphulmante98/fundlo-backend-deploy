const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId, 
        required:true,
        ref:"product" 
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId, 
        required:true,
        ref:"user"  
    },
    quantity:{
        type:Number,
        min:1,  
        default:1,
        required:true
      
    }
})

const cart_modal = mongoose.model("cart",cartSchema )
module.exports = cart_modal;
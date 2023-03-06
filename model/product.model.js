const mongoose = require('mongoose');

const product_Schema = new mongoose.Schema({
    image:String,
    title:String,
    price:Number,
    desc:String,
    category:String
})

const product_model = mongoose.model("product", product_Schema)

module.exports = product_model;


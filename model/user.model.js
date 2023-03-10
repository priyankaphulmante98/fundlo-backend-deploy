const mongoose = require('mongoose')

const user_schema = new mongoose.Schema({
    image:String,
    name:String,
    password:String,
    email:{type:String, required:true, unique:true},
    role:{type:String, enum:["buyer","admin"],default:"buyer",
},
})

const user = new mongoose.model("user", user_schema)
module.exports = user;

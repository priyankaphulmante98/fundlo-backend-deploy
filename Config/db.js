const mongoose = require('mongoose');
require("dotenv").config()

mongoose.set({strictQuery: false})

mongoose.connect("mongodb+srv://shreedhar:shreedhar@cluster0.urmb4ef.mongodb.net/fundflo?retryWrites=true&w=majority").then(() => 
console.log('db.connected')).catch((err) => console.log(err))
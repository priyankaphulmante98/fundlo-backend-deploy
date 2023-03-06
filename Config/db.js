const mongoose = require('mongoose');
require('dotenv').config()

mongoose.set({strictQuery: false})

mongoose.connect(process.env.MONGO_URL).then(() => 
console.log('db.connected')).catch((err) => console.log(err))
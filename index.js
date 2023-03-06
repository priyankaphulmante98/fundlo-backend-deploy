const express = require('express')
require('./Config/db')
const product_route = require('./Routes/product.route')
const user_route = require('./Routes/user.route')
const cors = require("cors")
require('dotenv').config()

const app= express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use('/auth',user_route) 
app.use('/product', product_route)
app.get('/', (req, res) => {
    res.send("hello")
})

app.listen(process.env.PORT,()=> {console.log('server started at port 8080')})
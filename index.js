const express = require('express')
require('./Config/db') 
require("dotenv").config()
const product_route = require('./Routes/product.route')
const user_route = require('./Routes/user.route')
const cors = require("cors")
const cart_route = require('./Routes/cart.route')


const app= express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use('/auth',user_route) 
app.use('/product', product_route) 
app.use('/cart', cart_route)

app.get("/",async(req,res)=>{
    return res.send("hello")
})

app.listen(process.env.PORT||8080,()=> {console.log('server started at port 8080')}) 
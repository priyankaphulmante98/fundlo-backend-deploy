const express = require('express');
const cart_model = require("../model/cart.model")
const product_model = require('../model/product.model')
const  userModel = require('../model/user.model')
const jwt = require('jsonwebtoken')
const controller = require('../Controller/cart.controller')

const router = express.Router();
//  router.use(authmiddleware)



router.get('/', controller.getCart)

router.post('/:id', controller.postCart)

router.patch(`/:id`,controller.update)

router.delete(`/:id`,controller.remove)


module.exports = router;




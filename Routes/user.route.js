const  express = require('express');

const router = express.Router();

const controller = require('../Controller/user.controller')


// user routes

router.get('/user', controller.getUsers)

router.get("/user/:id", controller.userProfile);

router.post('/signup', controller.signupUsers)

router.post('/login', controller.loginUsers)

module.exports = router;


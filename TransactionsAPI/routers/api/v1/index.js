const express = require('express');
const router = express.Router();
//  api/v1/

const usercontrollers = require('../../../controllers/signcontrollers');
const { authorizejwt } = require('../../../middlewares/authjwt');
const acccontrollers = require('../../../controllers/acccontrollers');

// for users
router.post('/signup',usercontrollers.signup); //body { name : "" , email : ""}
router.post('/login',usercontrollers.login); //body { name : "" , email : ""} 
router.get('/userslist',authorizejwt,usercontrollers.userslist) // headers authentication = Bearer <token>

//for accounts send money and balance
router.post('/sendmoney/:friendname/:amount/',authorizejwt,acccontrollers.sendmoney);//
router.get('/balance',authorizejwt,acccontrollers.balance);// headers authentication = Bearer <token>

module.exports = router
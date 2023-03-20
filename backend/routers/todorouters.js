const express = require('express');
const { Model } = require('mongoose');
const protect = require('../Middleware/Authmiddleware')
const router = express.Router();
router.use(express.json())
const {reqisterUser , getMe, updateuser , deleteuser} = require('../controllers/todocontrollers')

router.post('/',reqisterUser);
router.get('/me',protect,getMe);
router.put('/:_id',updateuser);
router.delete('/:_id',deleteuser);


module.exports = router
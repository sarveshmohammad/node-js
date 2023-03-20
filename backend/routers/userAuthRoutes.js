const express = require('express');
const { Model } = require('mongoose');
const protect = require('../Middleware/Authmiddleware')
const router = express.Router();
router.use(express.json())
const {reqisterUser , LoginUser , getMe} = require('../controllers/userAuthControllers')

router.post('/',reqisterUser);
router.post('/login',LoginUser);
router.get('/me',protect,getMe);

module.exports = router
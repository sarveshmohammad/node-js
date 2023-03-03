const express= require('express');
const {protect} = require('../middleware/authMiddleware')
const Router = express.Router();
Router.use(express.json())

const { getproduct, addproduct, updateproduct, deleteproduct } = require('../controllers/productControllers');

Router.get('/getproduct',protect,getproduct)
Router.post('/insertproduct',protect,addproduct)
Router.put('/updateproduct/:_id',protect,updateproduct)
Router.delete('/deleteproduct/:_id',protect,deleteproduct)


module.exports = Router
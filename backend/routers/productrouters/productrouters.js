const express= require('express');
const { getproduct, addproduct, updateproduct, deleteproduct } = require("../../controllers/productcontrllers/productcontrollers");
const router = express.Router();
router.use(express.json())


router.get('/getproduct',getproduct)    
router.post('/insertproduct',addproduct)
router.put('/updateproduct/:_id',updateproduct)
router.delete('/deleteproduct/:_id',deleteproduct)


module.exports = router;
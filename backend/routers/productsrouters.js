const express= require('express');
const router = express.Router();
router.use(express.json())
const { addProduct, getProduct, updateproducts, deleteproducts,  } = require('../controllers/productscontrollers');



router.get('/',getProduct)
router.post('/',addProduct)
router.put('/:_id',updateproducts)
router.delete('/:_id',deleteproducts)

module.exports = router
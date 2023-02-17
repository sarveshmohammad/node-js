const express = require('express');
const { getProduct ,  setProduct ,updateProduct , deleteProduct} = require('../controllers/productControllers')
const router = express.Router();


router.get('/', getProduct)

router.post('/', setProduct)

router.put('/:_id',updateProduct)

router.delete('/:_id', deleteProduct)

module.exports = router;
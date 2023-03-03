const express = require('express');
const app = express();
const router = express.Router();
router.use(express.json());

const { product , getproduct , postproduct , updateproduct , deleteproducts} = require('../../controllers/productcontrollers/productcontrollers')

router.get('/',product)
router.get('/:_id',getproduct)
router.post('/',postproduct)
router.put('/:_id',updateproduct)
router.delete('/:_id',deleteproducts)

module.exports = router
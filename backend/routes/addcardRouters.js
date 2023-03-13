const express= require('express');
const protect = require('../middleware/addmidderware')

const { getaddtocard, postaddtocard, deleteaddtocard } = require("../controllers/addcardcontrollers");
const router = express.Router();

router.use(express.json())


router.get('/get',protect,getaddtocard)    
router.post('/add',protect,postaddtocard)
router.delete('/:_id',deleteaddtocard)


module.exports = router;
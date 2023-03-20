const express= require('express');
const protect = require('../Middleware/addmiddleware')

const { getaddtocard, postaddtocard, deleteaddtocard } = require("../controllers/addtocardcontrollers");
const router = express.Router();

router.use(express.json())


router.get('/get',protect,getaddtocard)    
router.post('/add',protect,postaddtocard)
router.delete('/:_id',protect,deleteaddtocard)


module.exports = router;
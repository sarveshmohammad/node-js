const express= require('express');
const { getaddtocard, postaddtocard } = require("../controllers/addcardcontrollers");
const router = express.Router();
router.use(express.json())


router.get('/',getaddtocard)    
router.post('/',postaddtocard)


module.exports = router;
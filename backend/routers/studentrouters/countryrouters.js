const express = require('express');
const { Model } = require('mongoose');
//const protect = require('../Middleware/Authmiddleware')
const router = express.Router();
router.use(express.json())
const { setcountry , getcountry, postcountry, updatecountry, deletecountry} = require('../../controllers/studentcontrollers/countrycontrollers')

router.post('/',setcountry);
router.get('/me',getcountry);
router.post('/login',postcountry);
router.put('/:_id',updatecountry);
router.delete('/:_',deletecountry);



module.exports = router
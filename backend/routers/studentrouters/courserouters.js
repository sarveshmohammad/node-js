const express = require('express');
const { Model } = require('mongoose');
//const protect = require('../Middleware/Authmiddleware')
const router = express.Router();
router.use(express.json())
const { setcourse, getcourse, searchcourse, updatecourse, deletecourse } = require('../../controllers/studentcontrollers/coursecontrollers')

router.post('/',setcourse);
router.get('/me',getcourse);
router.get('/:_id',searchcourse);
router.put('/:_id',updatecourse);
router.delete('/:_',deletecourse);



module.exports = router
const express = require('express');
const router = express.Router();

router.use(express.json())

const { getuser, postuser, updateuser, deleteusre}=require('../../controllers/userscontrollers/userscontrollers')
router.get('/',getuser)
router.post('/',postuser)
router.put('/:_id',updateuser)
router.delete('/:_id',deleteusre)


module.exports = router;
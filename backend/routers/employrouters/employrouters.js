const express = require('express');
const app = express();
const router = express.Router();
router.use(express.json());

const { getemploy, postemploy, serchemploy, updateemploy, deleteemploy } = require('../../controllers/employcontrollers/employcontrollers')

router.get('/me',getemploy)
router.post('/',postemploy)
router.get('/:_id',serchemploy)
router.put('/:_id',updateemploy)
router.delete('/:_id',deleteemploy)



module.exports = router
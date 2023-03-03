const express = require('express');
const app = express();
const router = express.Router();
router.use(express.json());

const { employs , getemploy , postemploy , updateemploy , deleteemploy} = require('../../controllers/employcontrollers/employControllers')

router.get('/record',getemploy)
router.get('/:_id',employs)
router.post('/',postemploy)
router.put('/:_id',updateemploy)
router.delete('/:_id',deleteemploy)

module.exports = router
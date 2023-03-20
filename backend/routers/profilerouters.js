const express = require('express');
const app = express();
const router = express.Router();
router.use(express.json());

const { getprofile, postprofile} = require('../controllers/profilecontrollers')

router.get('/:_id',getprofile)
router.post('/:_id',postprofile)

module.exports = router
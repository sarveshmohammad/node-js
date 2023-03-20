const express = require('express');
const app = express();
const router = express.Router();
router.use(express.json());

const { getsignup, postsignup} = require('../controllers/signupcontrollers')

router.get('/',getsignup)
router.post('/',postsignup)

module.exports = router
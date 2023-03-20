const express= require('express');
const app = express()
const router = express.Router()
router.use(express.json())
const {allapi} = require("../controllers/desbordcontrollers")

router.get("/",allapi)

module.exports = router
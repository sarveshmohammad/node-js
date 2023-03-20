const express= require('express');
const app = express()
const router = express.Router()
router.use(express.json())

const {addstudent} = require("../../controllers/studentcontrollers/studentcontrollers")
router.post("/",addstudent)

module.exports = router
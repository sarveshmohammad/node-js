const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const {allfiels} = require("../../controllers/descbordcontrollers/descboardcontrollers")

Router.get("/",allfiels)

module.exports = Router
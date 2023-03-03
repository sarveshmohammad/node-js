const express= require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const { getsing , postsing } = require("../../controllers/studentcontrollers/signupcontrollers")

Router.post("/",postsing)
Router.get("/",getsing)

module.exports = Router
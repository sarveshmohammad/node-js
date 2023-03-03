const express = require('express');
const app = express()
const Router = express.Router()
const { postuser,deleteusre,getuser,findpost } = require("../../controllers/usercontrollers/usercontrooler")
Router.use(express.json())

Router.post("/", postuser)
Router.get("/", getuser)
Router.post("/insart/:_id", findpost)
Router.delete("/:_id", deleteusre)


module.exports = Router
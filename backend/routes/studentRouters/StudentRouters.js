const express = require('express');
const { model } = require('mongoose');
const Router = express.Router();
Router.use(express.json())


const { postdata, getuser , updatestudent , deletestudent}=require('../../controllers/studentcontrollers/StudentController')
Router.get('/me',getuser)
Router.post('/',postdata)
Router.put('/:_id',updatestudent)
Router.delete('/:_id',deletestudent)

module.exports = Router;
const express = require('express');
const { model } = require('mongoose');
const Router = express.Router();
Router.use(express.json())
// const router = require('../userAUTHroutes');


const { setdata , getdata , serchcoures} = require('../../controllers/studentcontrollers/coursecontrollers');

Router.post('/',setdata);

Router.get('/login',getdata);

Router.get('/:_id',serchcoures)

module.exports = Router;
const express = require('express');
const { model } = require('mongoose');
const Router = express.Router();
Router.use(express.json())
const router = require('../userAUTHroutes');


const { countrydata , getdata, postdata} = require('../../controllers/studentcontrollers/countrycontrollers');

Router.post('/',countrydata);

Router.get('/get',getdata);

Router.post('/post',postdata)

module.exports = Router;
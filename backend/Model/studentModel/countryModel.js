const mongoose = require('mongoose');
const studentcountry = new mongoose.Schema({
countryCode:String,
countryName:String,
countrySchools:Object   
})

module.exports = mongoose.model('studentCoutry',studentcountry)
const mongoose = require('mongoose');
const country = new mongoose.Schema({
    countryname: {
        type:String,
       },
    countrycode:{
        type:String,
    },
    countryschool:{
        type:Object,
    },   
});

module.exports = mongoose.model('studentcountry',country);
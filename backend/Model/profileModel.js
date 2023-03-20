const mongoose = require('mongoose');

const profile = new mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String},
    email:{type:String},
    gender:{type:String},
    images:{type:String},  

 
});

module.exports = mongoose.model('profile',profile);
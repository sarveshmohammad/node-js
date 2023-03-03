const mongoose = require('mongoose');

const profile = new mongoose.Schema({
    fistname:{type:String},
    lastname:{type:String},
    email:{type:String},
    gender:{type:String},
    images:{type:String},
});

module.exports = mongoose.model('profile',profile);
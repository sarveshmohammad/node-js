const mongoose = require('mongoose');

const employs = new mongoose.Schema({
    employId:{type:String},
    employName:{type:String},
    employemail:{type:String},
    employNumber:{type:String},
    employDOB:{type:String}, 
    employMent:{type:String},
    employAddress:{type:String}

});

module.exports = mongoose.model('Employs',employs);
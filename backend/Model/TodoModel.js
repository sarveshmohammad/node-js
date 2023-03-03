const mongoose = require('mongoose');
const todo = new mongoose.Schema({
    FirstName: {
        type:String,
        required:[true,'Please add a name']
       },
       LastName: {
        type:String,
        required:[true,'Please add email']
       },
       Email: {
        type:String,
        required:[true,'Please add a password']
       },
       Phone :{
        type:Number,
        required:[true,'Please add a name']
       },
       PinCode: {
        type:Number,
        required:[true,'Please add email']
       },
       Address: {
        type:String,
        required:[true,'Please add a password']
       },

});

module.exports = mongoose.model('todoS',todo);
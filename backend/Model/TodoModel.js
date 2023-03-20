const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    firstname:{
        type :String,
        required : [true, 'please add an firstname']
    },
    lastname:
    {
        type :String,
        required : [true, 'please add an lastname']    
    },
    email:{
        type :String,
        required : [true, 'please add an email']    
    },
    phone:{
        type :Number,
        required : [true, 'please add an phone']    
    },
    pincode:{
        type :Number,
        required : [true, 'please add an pincode']    
    },
    address:{
        type :String,
        required : [true, 'please add an address']    
    },
    state:{
        type :String,
        required : [true, 'please add an state']    
    },



},
{
    timestamps : true
 }
);

module.exports = mongoose.model('todo',todoSchema);

const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name:{
        type :String,
        required : [true, 'please add an name']
    },
    email:
    {
        type :String,
        required : [true, 'please add an email']    
    },
    password:{
        type :String,
        required : [true, 'please add an password']    
    },
    number:{
        type :String,
        required : [true, 'please add an number']    
    },

},
{
    timestamps : true
 }
);

module.exports = mongoose.model('student',studentSchema);
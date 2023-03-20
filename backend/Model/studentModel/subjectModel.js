const mongoose = require('mongoose');
const studentsubject = new mongoose.Schema({
    subjectName:{
       type:String
    }
    
},
{timestamps:true}
)

module.exports = mongoose.model('studentSubject',studentsubject);
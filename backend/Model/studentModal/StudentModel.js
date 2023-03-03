const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    SubjectName: {
        type:String,
        required:[true,'Please add a StudentName']
       },
       
});

module.exports = mongoose.model('StudentSubject',studentSchema);
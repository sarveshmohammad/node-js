const mongoose = require('mongoose');
const studentcourse = new mongoose.Schema({
course:Object   
})

module.exports = mongoose.model('studentCourse',studentcourse)
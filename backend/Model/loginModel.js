const mongoose = require('mongoose');
const studentModel = new mongoose.Schema({
    email: String,
    password: String
})

module.exports = mongoose.model('Login',studentModel)
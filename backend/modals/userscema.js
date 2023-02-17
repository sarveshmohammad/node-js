const {mongoose} = require('mongoose');
const studentscema = new mongoose.Schema({
    name:String,
    email:String,
    password:Number,
    Number:String
})
module.exports = mongoose.model("student",studentscema)
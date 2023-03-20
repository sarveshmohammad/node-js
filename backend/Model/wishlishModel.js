const mongoose = require('mongoose');
const wishlish = new mongoose.Schema({
    title: {  type: String },
    dis: { type: String },
    price: {type: Number},
    img: {type: String},
    
}, 
{
    timestamps: true
});

module.exports = mongoose.model('wishlish', wishlish);
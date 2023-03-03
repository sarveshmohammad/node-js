const mongoose = require('mongoose');

const product = new mongoose.Schema({
    producttitle:{type:String},
    productdis:{type:String},
    productprice:{type:String},
    productimage:{type:String},
    productrating:{type:String}, 
    productEXP:{type:String}
});

module.exports = mongoose.model('productdata',product);
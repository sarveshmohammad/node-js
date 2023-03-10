const mongoose = require('mongoose');
const addtocard = new mongoose.Schema({
    title: {  type: String },
    dis: { type: String },
    price: {type: String},
    reting: {type: String},
    color: { type: String},
    img: {type: String},
    size:{ type:String },
    quentity:{type:String},
    user_id:{type:String}
}, 
{
    timestamps: true
});

module.exports = mongoose.model('addtocard', addtocard);
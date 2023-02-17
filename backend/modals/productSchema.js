const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'please add an titel']
    },
    dis:{
        type:String,
        required:[true,'plese add an dicription']
    },
    price:{
        type:Number,
        required:[true,'plese add an price']
    },
    quentity:{
        type:Number,
        required:[true,'plese adda an quentity']
    },
    // title: String,
    // dis: String,
    // price: String,
    // quentity: String
},
    {
        timestamps : true
    }
);

module.exports = mongoose.model('products', UserSchema);
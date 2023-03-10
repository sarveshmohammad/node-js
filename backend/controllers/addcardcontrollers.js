const jwt = require("jsonwebtoken")
const mongodb = require('mongodb')
const protect = require('../middleware/addmodderware')
const addtocard = require('../Model/addcardModel');
const asyncHandler = require('express-async-handler');



const getaddtocard = async (req, res) => {
    let data = await addtocard.findOne({});
    console.log("======>", data);
    res.status(200).json(data)
}



const postaddtocard = async (req, res) => {

    const { title, dis, price, reting,img,color,size, quentity } = req.body
    if (!title && !dis && !price && !reting && !img && !color && !size && !quentity ) {
        res.status(400).json({ message: "Please add all Filed" })
    }
    let data = await addtocard.create({ 
        title,
        dis,
        img,
        price,
        reting,
        color,
        size,
        quentity
    });
    console.log("====>", data);
    res.status(200).json(data)
}



module.exports = {
    getaddtocard, postaddtocard
}
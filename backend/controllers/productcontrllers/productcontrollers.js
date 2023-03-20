
const jwt = require("jsonwebtoken")
const mongodb = require('mongodb');
const product = require('../../Model/productModel/productModel');
const asyncHandler = require('express-async-handler');



const getproduct = async (req, res) => {
    let data = await product.findOne({});
    console.log("======>", data);
    res.status(200).json(data)
}



const addproduct = asyncHandler(async (req, res) => {

    const { title, dis, price, reting,img,color,size } = req.body
    if (!title && !dis && !price && !reting && !img && !color && !size  ) {
        res.status(400).json({ message: "Please add all Filed" })
    }
    let data = await product.create({ 
        title,
        dis,
        img,
        price,
        reting,
        color,
        size
    });
    console.log("====>", data);
    res.status(200).json(data)
})

const updateproduct = asyncHandler(async (req, res) => {
    let findid = await product.findById(req.params._id);
    if (!findid) {
        res.status(400);
        res.send("user not found");
    }

    const updateusers = await product.findByIdAndUpdate(req.params._id, req.body, {
        new: true
    })
    console.log("=====>", updateusers);
    res.status(200).json({ message: `updatedata ${req.params._id}` })
})
const deleteproduct = asyncHandler(async (req, res) => {
    let findid = await product.findById(req.params._id);
    if (!findid) {
        res.status(400);
        res.send("user not found");
    }
    await findid.remove();


    res.status(200).json({ message: `delete data ${req.params._id}` });
})


module.exports = {
    getproduct, addproduct, updateproduct, deleteproduct
}
const products = require('../../Model/productModel/productModel')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
const { model } = require("mongoose")


const product = async (req,res)=>{
    const data = await products.find({})
    res.send(data)
}

const getproduct = async (req,res)=>{
    const data = await products.findById(req.params._id)
    res.send(data)

    console.log(req.params._id);
}

const postproduct = async (req,res)=>{
    const { producttitle , productdis , productprice ,productrating ,productEXP,productimage } = req.body

    const data = await products.create({
        producttitle,
        productdis, 
        productprice,
        productrating,
        productEXP,
        productimage
    })

    res.status(201).json({
        producttitle:data.producttitle,
        productdis:data.productdis,
        productprice:data.productprice,
        productrating:data.productrating,
        productEXP:data.productEXP,
        productimage:data.productimage,
    })
}

const updateproduct = async (req,res)=>{
    let data = await products.findById(req.params._id)
    if(!data){
    res.status(200).json({massage:"id is not define"})
}
let updatedata = await products.findByIdAndUpdate(req.params._id,req.body,{
    new:true
})
res.status(200).json(updatedata)
 }

 const deleteproducts =async(req,res)=>{
    const data = await products.findById(req.params._id);
    if(!data){
        res.status(300).json({massage:"enter id"})
    }
    await data.remove();
    res.status(400).json({massage:"data is delete"})
 }

module.exports = {
   product,
   getproduct,
   postproduct,
   updateproduct,
   deleteproducts
}






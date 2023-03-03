const bcrypt = require('bcryptjs')
const mongodb = require('mongodb');
const User = require('../../Model/studentModal/coursmodel');
const asyncHandler = require('express-async-handler');

const setdata = asyncHandler(async(req,res)=>{
    const { coures } = req.body
    let data = await User.create({coures:req.body.coures})
    console.log('==================>',data);
    res.status(200).json(data)
})

const getdata = asyncHandler(async(req,res)=>{
 const data = await User.find();
 console.log('==========>',data);
 res.status(200).json(data);
})

const serchcoures = asyncHandler(async(req,res)=>{
   let data = await User.findById(req.params._id);
   res.status(200).json(data)
    console.log(data);
})


module.exports = {
    setdata,
    getdata,
    serchcoures
}
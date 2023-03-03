const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const mongodb = require('mongodb');
const User = require('../../Model/studentModal/StudentModel');
const asyncHandler = require('express-async-handler');

const postdata = asyncHandler(async(req,res)=>{
    const { SubjectName } = req.body
    let data = await User.create({SubjectName:req.body.SubjectName})

console.log('============>',data);
res.status(200).json(data)
})

const getuser = asyncHandler(async(req,res)=>{
 const data = await User.find();
 console.log('==========>',data);
 res.status(200).json(data);
})

const updatestudent = async (req,res)=>{
    let data = await User.findById(req.params._id)
    if(!data){
    res.status(200).json({massage:"id is not define"})
}
let updatedata = await User.findByIdAndUpdate(req.params._id,req.body,{
    new:true
})
res.status(200).json(updatedata)
 }

 const deletestudent = async(req,res)=>{
    const data = await User.findById(req.params._id);
    if(!data){
        res.status(300).json({massage:"enter id"})
    }
    await data.remove();
    res.status(400).json({massage:"data is delete"})
 }


module.exports={
    postdata,
    getuser,
    updatestudent,
    deletestudent
}
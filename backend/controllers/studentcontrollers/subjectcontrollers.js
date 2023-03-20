const { models } = require("mongoose")
const { route } = require("../../routers/studentrouters/subjectrouters")
const { json } = require('express')

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../../Model/studentModel/subjectModel');
const protect = require("../../Middleware/Authmiddleware");

const setsubject = asyncHandler(async(req,res)=>{
    const { subjectName } = req.body
    let data = await User.create({subjectName:req.body.subjectName}); 
    console.log("====>",data);
     res.status(200).json({data})

})

const getsubject = asyncHandler (async(req,res)=>{
    let data = await User.find();
    console.log("======>",data);
    res.status(200).json(data)

})

const updatesub=asyncHandler( async (req,res)=>{
    let findid = await User.findById(req.params._id);
    if(!findid){
        res.status(400);
        res.send("user not found");
    }
        const updateusers = await User.findByIdAndUpdate(req.params._id,req.body,{
            new : true
        })
    
    console.log("=====>",updateusers);
    res.send(updateusers)
})

const deletesub= asyncHandler( async(req,res)=>{
   
    let findid = await User.findById(req.params._id);
    if(!findid){
        res.status(400);
        res.send("user not found");
    }
        await findid.remove();

   
    res.status(200).json({message : `delete data ${req.params.id}`});
 })




module.exports = {
    setsubject,
    getsubject,
    updatesub,
    deletesub
}

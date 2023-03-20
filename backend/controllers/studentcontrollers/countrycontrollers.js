const { models } = require("mongoose")
const { route } = require("../../routers/studentrouters/countryrouters")
const { json } = require('express')

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../../Model/studentModel/countryModel');
const protect = require("../../Middleware/Authmiddleware");

const setcountry = asyncHandler(async(req,res)=>{
    const { countryCode, countryName, countrySchools } = req.body
    let data = await User.create({countryCode:req.body.countryCode,countryName:req.body.countryName,countrySchools:req.body.countrySchools}); 
    if(!data){
        res.status(404).json("not data found")
    }
    console.log("====>",data);
     res.status(200).json({data})

})

const getcountry = asyncHandler (async(req,res)=>{
    let data = await User.find();
    console.log("======>",data);
    res.status(200).json(data)

})

const postcountry = asyncHandler(async(req,res)=>{
const { countryCode, countryName} = req.body
const data = await User.findOne({countryName})
JSON.stringify(data)
if(!data){
    res.status(404).json({error:"please valid data"})
}
console.log(data);
if(data.countryCode || data.countryName){
    res.status(201).json({
        countrySchools: data.countrySchools

    })
}
})

const updatecountry=asyncHandler( async (req,res)=>{
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

const deletecountry= asyncHandler( async(req,res)=>{
   
    let findid = await User.findById(req.params._id);
    if(!findid){
        res.status(400);
        res.send("user not found");
    }
        await findid.remove();

   
    res.status(200).json({message : `delete data ${req.params.id}`});
 })



module.exports = {
    setcountry,
    getcountry,
    postcountry,
    updatecountry,
    deletecountry
    
}

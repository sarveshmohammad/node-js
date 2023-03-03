const bcrypt = require('bcryptjs')
const mongodb = require('mongodb');
const User = require('../../Model/studentModal/conutryModel');
const asyncHandler = require('express-async-handler');

const countrydata = asyncHandler(async(req,res)=>{
    const { countryname , countrycode , countryschool } = req.body
    let data = await User.create({countryname:req.body.countryname,countrycode:req.body.countrycode,countryschool:req.body.countryschool})
    console.log('=============>>>>>>>',data);
    res.status(200).json({data})
})

const getdata = asyncHandler(async(req,res)=>{
 const data = await User.find();
 console.log('==========>',data);
 res.status(200).json(data);
})

const postdata = asyncHandler(async(req,res)=>{
    const { countrycode , countryname } = req.body
    const data = await User.findOne({countryname})
    JSON.stringify(data)
    if(!data){
        res.status(400).json({error:"please valid data"})
    }
    console.log(data);
    if(data.countrycode || data.countryname){
        res.status(201).json({
            countryschool:data.countryschool
        })
    }
})

module.exports = {
    countrydata,
    getdata,
    postdata
}

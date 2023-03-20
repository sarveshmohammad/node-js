const db = require('../config');
db();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const user = require('../Model/todoModel')
//des reqisterUser new users
// routes POST /api/userAuth
// access Public

const reqisterUser = asyncHandler(async(req,res)=>{
    const {firstname , lastname , email, phone, pincode, address, state} = req.body;
    if(!firstname || !lastname || !email || !phone || !pincode || !address || !state){
        res.status(400)
        throw new Error("please add all fieds")
    }
    if(generateToken){
        let data = await user.create({firstname:req.body.firstname,lastname:req.body.lastname,email:req.body.email,phone:req.body.phone,pincode:req.body.pincode,address:req.body.address,state:req.body.state,})
      
    }
    
    const data =await user.create({
        firstname,
        lastname,
        email,
        phone,
        pincode,
        address,
        state,

    })
   
    if(data){
        res.status(201).json({
            _id:data.id,
            firstname:data.firstname,
            lastname:data.lastname,
            email:data.email,
            phone:data.phone,
            pincode:data.pincode,
            address:data.address,
            state:data.state,
            token:generateToken(data._id)
        })
    }else{
        res.status(400)
        throw new Error("data is already exits")
    }
//    res.json({message : req.body})
})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

//des getMe new users
// routes GET /api/userAuth/me
// access Public

const getMe =asyncHandler (async (req,res)=>{
    const { _id, firstname , lastname , email } = await user.findById(req.users.id)
    res.status(200).json({
        id:_id,
        firstname,
        lastname,
        email,
        token:generateToken(user._id)
      
    })
})

const updateuser=asyncHandler( async (req,res)=>{
    let findid = await user.findById(req.params._id);
    if(!findid){
        res.status(400);
        res.send("user not found");
    }
    if(generateToken){
        const updateusers = await user.findByIdAndUpdate(req.params._id,req.body,{
            new : true
        })
    }
    
    console.log("=====>",updateusers);
    // let data = await db();
    // let result = await  data.updateOne({_id: new mongodb.ObjectId(req.params._id)},{$set:req.body});
    // res.status(200).json({result})
    res.status(200).json({message : `updatedata ${req.params._id}`})
})

const deleteuser= asyncHandler( async(req,res)=>{
   
    let findid = await user.findById(req.params._id);
    if(!findid){
        res.status(400);
        res.send("user not found");
    }
    if(generateToken){
        await findid.remove();

    }
   
    res.status(200).json({message : `delete data ${req.params.id}`});
 })

module.exports = {
    reqisterUser,
    getMe,
    updateuser,
    deleteuser
}
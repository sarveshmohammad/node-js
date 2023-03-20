const { models } = require("mongoose")
const { route } = require("../routers/userAuthRoutes")
const { json } = require('express')

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../Model/userAuthModel')
//des reqisterUser new users
// routes POST /api/userAuth
// access Public

const reqisterUser = asyncHandler(async(req,res)=>{
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        res.status(400)
        throw new Error("please add all fieds")
    }
    const userExists =await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error("please ayerly email")
    }else{
        if(password.length > 8 || password.length < 8){
            res.status(400)
            throw new Error("password is invalid")
        }
    }

    // const salt = await bcrypt.getSalt(10)
    // const hashedPassword = await bcrypt.hash(password,salt);
    // const passeexits = User.findOne(password)
    let text = email.includes("@gmail.com")
        if(!text){
            res.status(400)
        throw new Error("please add @gmail.com")
        }

       
    
    const data =await User.create({
        name,
        email,
        password,
    })

    if(data){
        res.status(201).json({
            _id:data.id,
            name:data.name,
            email:data.email,
        })
    }else{
        res.status(400)
        throw new Error("data is already exits")
    }
  // res.json({message : req.body})
})
//des LoginUser new users
// routes POST /api/userAuth/login
// access Public

const LoginUser =asyncHandler(async (req,res)=>{
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if(user && (bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email:user.email,
            token: generateToken(user._id)
        })
    }
    else{
        res.status(400)
        throw new Error("invalid credentials")
    }
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
    const { _id, name, email } = await User.findById(req.user.id)
    res.status(200).json({
        id:_id,
        name,
        email,
         token: generateToken(User._id)
    })
})



module.exports = {
    reqisterUser,
    LoginUser,
    getMe
}
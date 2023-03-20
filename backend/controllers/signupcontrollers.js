const signup = require('../Model/signupModel')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');

const getsignup = async(req,res)=>{
    const data =  await signup.findOne({})
    res.send(data)
}

const postsignup = async(req,res)=>{
    const { firstname, lastname, email, password, gender } = req.body
    let cheackemail = email.includes("@gmail.com")
    if(!cheackemail){
        res.status(400)
        throw new Error ("please add the @gmail.com")
    }
    const data = await signup.create({
        firstname, 
        lastname,
        email, 
        password, 
        gender
    })
    res.status(201).json({
        firstname:data.firstname,
        lastname:data.lastname,
        email:data.email,
        password:data.password,
        gender:data.gender,
        token:generateToken(data._id)

    })
}

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    getsignup,
    postsignup
}

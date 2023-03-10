const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const asynchandler = require('express-async-handler');
// const User = require('../Model/userAuthModel');
const User = require('../Model/userAuthModel')
const { json } = require('express');





//des registeruser  new users
// routes post /api/userAuth
// access public

const registeruser = asynchandler(async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        res.status(400)
        throw new Error("please add all fields");
    }
        //check userExits user email
        const userExists = await User.findOne({email})
       // console.log("=======>SDS userExists====>",userExists);
        if(userExists){
            res.status(400)
            throw new Error("Email already exits")
        }else{
            if(password.length>8  || password.length<8){
                res.status(400)
                throw new Error("Password length must be 8")
            }
        }

     let checkmail = email.includes("@gmail.com")
       if(!checkmail){
        res.status(400)
        throw new Error("Please add @gmail.com")
       }




//        const str1 = 'number60';
// const str3 = 'has special characters !@#$%^&';
// if(str1){
//     str1.match("number60")
// }
       
       
        // if(email!='@gmail.com'){
        //     res.status(400)
        //     throw new Error("email verfication must be content")
        // }
     
    
    
       const data =  await User.create({
        name,
        email,
        password,
        // token:generateToken(User._id) 
})




       if(data){
        res.status(201).json({
            _id:data.id,
            name:data.name,
            email:data.email,
            token:generateToken(User._id) 
        })
       }else{
        res.status(400)
        throw new Error("data is already exits")
       }
    })

//des loginuser  new users
// routes post /api/userAuth/login
// access public
const loginuser = asynchandler(async (req, res) => {
  const {email , password} = req.body
  const user1 = await User.findOne({email})
  console.log("====dsds===>>>",user1);
  if(user1 && (bcrypt.compare(password,user1.password))){
    res.json({
        _id:user1.id,
        name:user1.name,
        email:user1.email,  
        token:generateToken(user1._id) 
    })
  } else{
    res.status(400)
        throw new Error("Invalid credentials")
  }
    

    // res.json({message:"login user"});

})

const generateToken=(id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET,{
    expiresIn :'30d',
   })
   }
//des getMe  new users
// routes post /api/userAuth/me
// access public
const getMe = asynchandler(async (req, res) => {
   const {_id,name,email} = await User.findById(req.user.id)
    res.status(201).json({
  id:_id,
  name,
  email,
  token:generateToken(User._id)

    })
    })
    // res.json({ message: data });
    
    // res.send(data)
    // res.json(data);






module.exports = {
    registeruser,
    loginuser,
    getMe
}
const jwt = require('jsonwebtoken');
const db = require('../config');
db();
const bcrypt = require('bcryptjs')
const mongodb = require('mongodb')
const User = require('../Model/TodoModel')
const asynchandler = require('express-async-handler');

const registeruser = asynchandler(async (req, res) => {
    const { FirstName, LastName, Email, Phone, PinCode, Address, State } = req.body
    if (!FirstName || !LastName || !Email || !Phone || !PinCode || !Address || !State) {
        res.status(400)
        throw new Error("please add all fields");
    }
    //check userExits user email
    const userExists = await User.findOne({ Email })
    // console.log("=======>SDS userExists====>",userExists);
    // if(userExists){
    //     res.status(400)
    //     throw new Error("Email already exits")
    // }else{
    //     if(password.length>8  || password.length<8){
    //         res.status(400)
    //         throw new Error("Password length must be 8")
    //     }
    // }
    let checkmail = Email.includes("@gmail.com")
    if (!checkmail) {
        res.status(400)
        throw new Error("Please add @gmail.com")
    }

    const data = await User.create({
        FirstName, LastName, Email, Phone, PinCode, Address, State
        // token:generateToken(User._id) 
    })
    if (data) {
        res.status(201).json({
            _id: data.id,
            FirstName: data.FirstName,
            LastName: data.LastName,
            Email: data.Email,
            Phone: data.Phone,
            PinCode: data.PinCode,
            Address: data.Address,
            State: data.State,
            token: generateToken(data._id)
        })
    } else {
        res.status(400)
        throw new Error("data is already exits")
    }
})




const loginuser = asynchandler(async (req, res) => {
    const { FirstName, LastName, Email, Phone, PinCode, Address, State } = req.body
    const user1 = await User.findOne({ Email })
    // console.log("====dsds===>>>",user1);
    if (user1 && (bcrypt.compare(PinCode, user1.PinCode))) {
        res.json({
            
            FirstName: FirstName,
            LastName: LastName,
            Email: Email,
            Phone,
            PinCode,
            Address,
            State,
            token: generateToken(User._id)
        })
    } else {
        res.status(400)
        throw new Error("Invalid credentials")
    }


    // res.json({message:"login user"});

})
const getMe = asynchandler(async (req, res) => {
    const { _id, FirstName, LastName, Email, Phone, PinCode, Address, State } = await User.findById(req.user.id)
    console.log(req.user);
    res.status(201).json({
        _id: _id,
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        Phone: Phone,
        PinCode: PinCode,
        Address: Address,
        State: State,
        //token: generateToken(User._id)

    })
})





const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}


module.exports = {
    registeruser,
    loginuser,
    getMe
}
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mongoose = require('mongodb');
const Users = require('../Model/productsModel');
const asynchandler = require('express-async-handler');




const addProduct = asynchandler(async(req,res)=>{
    const { Men , Women , Electronic , Fashion } = req.body 
     const data = await Users.create({
        Men,
        Women,
        Fashion,
        Electronic
     })
     res.send({
        Men,
        Women,
        Fashion,
        Electronic,
        token: generateToken(Users._id)

     })
})


 const getProduct = asynchandler(async(req,res)=>{
    try {
    const data = await Users.find({});
    if(!data){
        res.status(400).json({error:"data is not defined"})
    }
      res.send(data)  
    } catch (error) {
        res.send(400).json({error})
    }

 })




 
const updateproducts = asynchandler(async (req, res) => {
    let findid = await Users.findById(req.params._id);
    if (!findid) {
        res.status(300);
        res.send("user not found");
    }

    const updateusers = await Users.findByIdAndUpdate(req.params._id, req.body, {
        new: true
    })
    console.log("=====>", updateusers);
    
    res.status(200).json({ message: `updatedata ${req.params._id}` })
})





const deleteproducts = asynchandler(async (req, res) => {
    let findid = await Users.findById(req.params._id);
    if (!findid) {
        res.status(300);
        res.send("user not found");
    }
    if(generateToken){
        await findid.remove();
        }
    res.status(200).json({ message: `delete data ${req.params._id}` });
    
})


const generateToken = (id)=>{
    return jwt.sign({ id }), process.env.JWT_SECRET,{
        expiresIn:'40d'
    }
}



module.exports = {
    addProduct,
    getProduct,
    updateproducts,
    deleteproducts

}
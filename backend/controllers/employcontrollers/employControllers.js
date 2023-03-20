const employs = require('../../Model/employModel/employModel')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const getemploy = async(req,res)=>{
    let data = await employs.find({});
    console.log("======>",data);
    res.status(200).json({data})

}

const postemploy = async(req,res)=>{
    const { employId, employName, employEmail, employNumber, employDob, employMent, employAddress } = req.body
    let cheackemail = employEmail.includes("@gmail.com")
    if(!cheackemail){
        res.status(400)
        throw new Error ("please add the @gmail.com")
    }
    const data = await employs.create({
        employId, 
        employName, 
        employEmail, 
        employNumber, 
        employDob, 
        employMent, 
        employAddress
    })
    res.status(201).json({data})
}

const serchemploy = async(req,res)=>{
    let data = await employs.findById(req.params._id);
    console.log("=====================================>",req.params._id);
    res.status(200).json(data);
 }

 const updateemploy= async (req,res)=>{
    let findid = await employs.findById(req.params._id);
    if(!findid){
        res.status(400);
        res.send("user not found");
    }

        const updateusers = await employs.findByIdAndUpdate(req.params._id,req.body,{
            new : true
    
    })
    res.send(updateusers)
}

const deleteemploy= async(req,res)=>{
   
    let findid = await employs.findById(req.params._id);
    if(!findid){
        res.status(400);
        res.send("user not found");
    }
        await findid.remove();

    res.status(200).json({message : `delete data ${req.params.id}`});
 }




module.exports = {
    getemploy,
    postemploy,
    serchemploy,
    updateemploy,
    deleteemploy

}

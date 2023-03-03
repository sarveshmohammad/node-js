const employ = require("../../Model/employModel/employModel")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
const { model } = require("mongoose")


const getemploy = async (req,res)=>{
    const data = await employ.find({})
    res.send(data)
}

const employs = async (req,res)=>{
    const data = await employ.findById(req.params._id)
    res.send(data)

    console.log(req.params._id);
}

const postemploy = async (req,res)=>{
    const { employId , employName , employemail ,employNumber ,employDOB ,employMent ,employAddress} = req.body

    let checkemail = employemail.includes("@gmail.com")
    if (!checkemail) {
        res.status(400)
        throw new Error("please add the @gmail.com")
    }

    const data = await employ.create({
        employId,
        employName,
        employemail,
        employNumber,
        employDOB,
        employMent,
        employAddress
    })

    res.status(201).json({
        employId:data.employId,
        employName:data.employName,
        employemail:data.employemail,
        employNumber:data.employNumber,
        employDOB:data.employDOB,
        employMent:data.employMent,
        employAddress:data.employAddress,
        token:generateToken(data._id)
    })
}

const updateemploy = async (req,res)=>{
    let data = await employ.findById(req.params._id)
    if(!data){
    res.status(200).json({massage:"id is not define"})
}
let updatedata = await employ.findByIdAndUpdate(req.params._id,req.body,{
    new:true
})
res.status(200).json(updatedata)
 }

 const deleteemploy =async(req,res)=>{
    const data = await employ.findById(req.params._id);
    if(!data){
        res.status(300).json({massage:"enter id"})
    }
    await data.remove();
    res.status(400).json({massage:"data is delete"})
 }

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    employs,
    getemploy,
    postemploy,
    updateemploy,
    deleteemploy
}






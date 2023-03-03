const profile = require('../../Model/studentModal/profilemodel')
const signup = require('../../Model/studentModal/signupmodel')

const getprofile = async(req,res)=>{
    const data = await signup.findById(req.params._id)
    if(!data){
        res.status(404).json({error:"not found"})
    }
    res.status(201).json({
        fistname:data.fistname,
        lastname:data.lastname,
        email:data.email,
        gender:data.gender
    })
}

const postprofile = async(req,res)=>{
    const data =  await signup.findById(req.params._id)
    const { fistname, lastname, email, gender, images} = req.body
    if(data.fistname == fistname && data.lastname == lastname && data.email == email && data.gender == gender){
        const pro = await profile.create({
            fistname,
            lastname,
            email,
            gender,
            images
        })
        res.send(pro)
        }else{
            res.status(404).json({error:"detail in invalid"})
        }
}

module.exports = {
    getprofile,
    postprofile
}
const profile = require('../Model/profileModel')
const signup = require('../Model/signupModel')

const getprofile = async(req,res)=>{
    const data = await signup.findById(req.params._id)
    if(!data){
        res.status(404).json({error:"not found"})
    }
    res.status(201).json({
        firstname:data.firstname,
        lastname:data.lastname,
        email:data.email,
        gender:data.gender
    })
}

const postprofile = async(req,res)=>{
    const data =  await signup.findById(req.params._id)
    const { firstname, lastname, email, gender, images} = req.body
    if(data.firstname == firstname && data.lastname == lastname && data.email == email && data.gender == gender){
        const pro = await profile.create({
            firstname,
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
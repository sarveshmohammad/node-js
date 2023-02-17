const { Collection } = require('mongodb');
const db = require('../config');
const bcrypt = require('bcrypt')

const asyncHandler = require('express-async-handler');
const studentscema = require('../modals/userscema');
const { set } = require('mongoose');


const getUsers = asyncHandler(async (req, res) => {
    let data = await studentscema.find()
    console.log(data);
    res.status(200).json(data)
})

const setUsers = asyncHandler(async (req, res) => {
    const { name, email, password, number } = req.body
    if (!name && !email, !password && !number) {
        res.status(400)
        throw new Error('Please add a all body filds')
    }

    let data = await studentscema.create(
        {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            number: req.body.number
        }
    )
    console.log("====>", data);
    res.send(data)
})

const loginserver = asyncHandler(async (req, res) => {

    const { email, password } = req.body;
    const userExists = await studentscema.findOne({ email })
    if (userExists) {
        res.status(400);
        throw new Error('Email already exists')
    }
    const passexits = await studentscema.findOne({ password })
    if (passexits) {
        res.status(400);
        throw new Error('Password already exists')
    }
    else {
        let result = await studentscema.create(
            {
                email: req.body.email,
                password: req.body.password
            }
        );
        res.status(200).json(result)
    }
})
// const setUsers = asyncHandler(async (req, res) => {

//     const { name, email, password, Number } = req.body;
//     if (!name && !email && !password && !Number) {
//         res.status(400);
//         throw new Error('Please add a All body filds')
//     }

//     const userExists = await studentscema.findOne({ email })
//     if (userExists) {
//         res.status(400);
//         throw new Error('User already exists')
//     }

//     const salt = await bcrypt.getSalt
//     const hashedPassword = await bcrypt.hash(password, salt)

//     const data = await users.create({
//         name,
//         email,
//         password: hashedPassword,
//         Number: Number
//     })
//     console.log("====>", data);
//     if (data) {
//         res.status(201).json({
//             _id: data.id,
//             name: data.name,
//             email: data.email,
//             Number: data.Number
//         })
//     } else {
//         res.status(400)
//         throw new Error('Invalid User Data')
//     }


// })
const updateUsers = asyncHandler(async (req, res) => {
    const findId = await studentscema.findById(req.params.id)
    if (!findId) {
        res.status(400)
        res.send("user not fount")
    }
    const updateUsers = await studentscema.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    console.log(updateUsers);
    res.status(200).json({ massage: `updatedata ${req.params.id}` })
})

const deleteUsers = asyncHandler(async (req, res) => {
    let findId = await studentscema.findById(req.params.id)
    if (!findId) {
        res.status(400)
        res.send('user not found')
    }
    await findId.remove();
    res.status(200).json({ massage: `delete data ${req.params.id}` })
})

module.exports = {
    getUsers,
    setUsers,
    updateUsers,
    deleteUsers,
    loginserver

}
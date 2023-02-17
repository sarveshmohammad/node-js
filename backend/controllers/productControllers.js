
const asyncHandler = require('express-async-handler');
const { Error } = require('mongoose');
const users = require('../modals/productSchema')


const getProduct = asyncHandler(async (req, res) => {
    const data = await users.find();

    res.status(200).json(data);

})

const setProduct = asyncHandler(async (req, res) => {
    const { title, dis, price, quentity } = req.body;
    if (!title && !dis && !price && !quentity) {
        res.status(400)
        throw new Error('plese add a all files')
    }
    const data = await users.create({
        title: req.body.title,
        dis: req.body.dis,
        price: req.body.price,
        quentity: req.body.quentity
    })
    res.status(200).json({ message: data });

})


const updateProduct = asyncHandler(async (req, res) => {
    const fintId = await users.findById(req.params._id);
    if (!fintId) {
        res.status(400)
        res.send('User Not Found');
    }
    const UpdateUser = await users.findByIdAndUpdate(req.params._id, req.body, {
        new: true
    })
    console.log("===> UpdateUser", UpdateUser);
    res.status(200).json({ message: `upadatedata ${req.params._id}` });

})


const deleteProduct = asyncHandler(async (req, res) => {
    const findId = await users.findById(req.params._id);
    if (!findId) {
        res.status(400)
        res.send('User Not Found');
    }
    await findId.remove();
    res.status(200).json({ message: `delete data ${req.params._id}` });

})
module.exports = {
    getProduct,
    setProduct,
    updateProduct,
    deleteProduct,
}
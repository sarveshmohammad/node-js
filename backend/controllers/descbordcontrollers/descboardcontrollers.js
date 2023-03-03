const studentsub = require("../../Model/studentModal/StudentModel")
const studentcountry = require('../../Model/studentModal/conutryModel')
const studentcourse = require('../../Model/studentModal/coursmodel')
const Employ = require('../../Model/employModel/employModel')
const product = require('../../Model/productModel/productModel')

const allfiels = async (req, res) => {
  let sub = await studentsub.find({})
  let country = await studentcountry.find({}) 
  let course = await studentcourse.find({})
  let emp = await Employ.find({})
  let prod = await product.find({})

 const arr = [
    sub={
        "imadge":"https://watermark.lovepik.com/photo/20211130/large/lovepik-primary-school-students-study-picture_501212451.jpg",
        "name":"student",
        "data":sub
    },
    country={
      "image":"https://watermark.lovepik.com/photo/20211130/large/lovepik-primary-school-students-study-picture_501212451.jpg",
      "name":"india",
      "data":country
    },
    course={
     "image":"https://watermark.lovepik.com/photo/20211130/large/lovepik-primary-school-students-study-picture_501212451.jpg",
     "name":"node",
     "data":course  
    },
    emp={
        "image":"https://wallpaperaccess.com/full/4322025.jpg",
        "name":"employ",
        "data":emp
        },
    prod={
        "image":"https://stickybranding.com/wp-content/uploads/2019/11/How-to-name-your-product.jpg",
        "name":"products",
        "data":prod
    }
  ];

res.status(200).json({arr})
}

module.exports = { allfiels }
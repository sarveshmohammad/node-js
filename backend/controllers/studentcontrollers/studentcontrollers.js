const student = require("../../Model/studentModel/studentModel")
const subjects = require("../../Model/studentModel/subjectModel")
const countr = require("../../Model/studentModel/countryModel")
const cours = require("../../Model/studentModel/courseModel")


const addstudent = async (req, res) => {
  const { name, country, schoolname, number, coursse, gender, email, subject } = req.body
  const countrys = await countr.findOne({})
  const courses = await cours.findOne({})
  const subjecting = await subjects.findOne({})
  JSON.stringify(countrys)
  JSON.stringify(courses)
  JSON.stringify(subjecting)
  console.log(country);
  console.log(courses);
  console.log(countrys)
  console.log(subjecting);




    const data = await student.create({
      name,
      country,
      schoolname,
      number,
      coursse,
      gender,
      email,
      subject,
    })

    res.send(data)
 

}


module.exports = { addstudent, }
const mongoose = require('mongoose');
// const url= 'mongodb://127.0.0.1:27017';
// console.log(process.env);
// console.log("=============>",process.env.MONGO_URL);
console.log("heelll");
console.log("nijamm");
const ConnectDB= async()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URL)
    }
    catch(error){
 console.log("======>",error);
        process.exit(1)
    }
}
module.exports = ConnectDB;
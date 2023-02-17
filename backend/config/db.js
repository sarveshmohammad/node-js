const mongoose = require('mongoose');
require('dotenv').config()



const ConnectDB = async()=>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URL)
        // console.log(con);
    }
    catch(error){
        // console.log("======erroor======",error);
        process.exit(1)
    }
}

module.exports = ConnectDB;
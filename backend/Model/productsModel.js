const mongoose = require("mongoose")
const newproduct = new mongoose.Schema({
  Men:{
    type: Object
  },

  Women:{
    type: Object
  },

  Electronic:{
    type: Object
  },

  Fashion:{
    type: Object
  }
})


module.exports= mongoose.model("newproduct",newproduct)
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      mobile:{
        type:Number,
        required:true
      },
      password: {
        type: String,
        required: true,
      },
},{timestamps:true});

const User = new mongoose.model("User" , userSchema);
module.exports = User;
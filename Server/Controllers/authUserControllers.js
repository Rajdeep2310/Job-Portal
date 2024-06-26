const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const testApi = (req,res) =>{
    res.status(200).json({message:"Everything is A-Ok..."})
}

const userRegister = async(req,res) =>{
    try{
        const { username , email, mobile ,password } = req.body;
        const hashedPassword = bcrypt.hashSync(password,10);
        const newUser = new User({username , email, mobile ,password:hashedPassword})
        await newUser.save();
        res.status(200).json({message:"User created..."})
    }catch(error){
        res.status(400).json({message:"User not created..."})
    }
}
const userLogin = async(req,res,next) =>{
    try{
        const{ email , password} = req.body;
        const validUser = await User.findOne({email:email});
        // Finding User exists or not:
        if(!validUser) {
            return res.status(400).json({message:"Not a valid user..."})
        }
        const validPassword = bcrypt.compareSync(password,validUser.password)

        if(!validPassword){
            return res.status(400).json({message:"Wrong Credentials..."})
        }
        // creating token here:
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET)
        const { password: pass, ...rest} = validUser._doc;

        res.json({message:"User logged in...",token:token,...rest})
    }catch(error){
        res.status(400).json({message:"User not logged in ..."})
    }
}
module.exports = {userRegister,userLogin , testApi}
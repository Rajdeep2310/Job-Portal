
const testApi = (req,res) =>{
    res.status(200).json({message:"Everything is A-Ok..."})
}
const userRegister = (req,res,next) =>{
    //
}
const userLogin = (req,res,next) =>{
    //
}
module.exports = {userRegister,userLogin , testApi}
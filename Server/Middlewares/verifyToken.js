const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next) =>{
    const token = req.cookies.access_token;

    if(!token) return res.status(402).json({message:"Unauthorized Access..."})


    jwt.verify(token, process.env.JWT_SECRET,(err,user) =>{
        if(err) return res.status(402).json({message:"Forbidden Access"})
        req.user = user;
        next();
    })
}

module.exports = verifyToken;
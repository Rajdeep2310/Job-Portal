const express = require("express");
const userRouter = express.Router();
const{userRegister,userLogin, testApi} = require("../Controllers/authUserControllers")

// heath, register and Login routes:

userRouter.get("/health", testApi)
userRouter.post("/register",userRegister);
userRouter.post("/login", userLogin );

module.exports = userRouter;
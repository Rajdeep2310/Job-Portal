//Importing packages and functions...
const express = require("express");
const colors = require("colors")
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Some Middlewares...
dotenv.config();
app.use(express.json()); 

// Database Connection ....
mongoose.connect(process.env.MONGO_URL).then(() =>{
    console.log(`Connected to MongoDB Database     `.italic.bgGreen);
}).catch((err) =>{
    console.log(err)
});

//Listening Port...

app.listen(1000,() => {
    console.log(`Server is running on port : 1000  `.italic.bgBlue)
})

// Application Routes ...
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
//companyName, jobPosition,jobDescription ,skills, salary, location, jobType 
    companyName:{
        type:String,
        required: true,
    },
    jobPosition:{
        type:String,
        required: true,
    },
    jobDescription:{
        type:String,
        required: true,
    },
    skills:{
        type:Array,
        required: true
    },
    salary:{
        type:Number,
        required: true,
    },
    location:{
        type:String,
        required: true,
    },
    jobType:{
        type:String,
        required: true,
    },
}, { timestamps: true });

const Job = new mongoose.model("Job", jobSchema);
module.exports = Job;

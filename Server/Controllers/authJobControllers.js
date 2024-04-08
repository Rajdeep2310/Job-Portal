const Job = require("../Models/Job");


const testApi = (req,res) =>{
    res.status(200).json({message:"Everything is A-Ok..."})
}

const creatingJob = () => {
    //
}
const getAllJob = () =>{
    //
}

const getJobById =() => {
    //
}

module.exports = {creatingJob,getAllJob, getJobById , testApi}
const Job = require("../Models/Job");

const testApi = (req, res) => {
  res.status(200).json({ message: "Everything is A-Ok..." });
};

const creatingJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);
    return res.status(200).json(job);
  } catch (error) {
    res.status(402).json({ message: "Job not Created..." });
  }
};

const getAllJob = async (req, res) => {
  try {
    const AllJobs = await Job.find();
    res.status(200).json(AllJobs);
  } catch (error) {
    res.status(400).json({ message: "Bad Request..." });
  }
};

const getJobById = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    const jobDetails = await Job.findById(jobId);
    console.log(jobDetails);
    res.status(200).json(jobDetails);
  } catch (error) {
    res.status(400).json({ message: "Bad Request..." });
  }
};

const updateJobDetailsById = () => {
  const jobId = req.params.jobId;
  
};

module.exports = {
  creatingJob,
  getAllJob,
  getJobById,
  testApi,
  updateJobDetailsById,
};

// const {
//     title,
//     companyName,
//     jobPosition,
//     jobDescription,
//     skills,
//     salary,
//     location,
//     jobType,
//   } = req.body;

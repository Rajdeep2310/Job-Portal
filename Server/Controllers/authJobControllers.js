const Job = require("../Models/Job");

const testApi = (req, res) => {
  res.status(200).json({ message: "Everything is A-Ok..." });
};

const creatingJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);
    return res.status(200).json(job);
  } catch (error) {
    res.status(400).json({ message: "Job not Created..." });
  }
};


const getAllJob = async (req, res, next) => {
    try {
      const jobPosition = req.query.jobPosition || "";
      const skills = req.query.skills;
  
      let filter = {};
      let formattedSkills;
      if (skills) {
          formattedSkills = skills.split(",");
  
          if (formattedSkills) {
              const regexArray = formattedSkills.map(
                  (value) => new RegExp(value, "i")
              );
  
              filter = {
                  skills: { $in: regexArray },
              };
          }
      }
  
      const jobList = await Job.find(
          {
            jobPosition: { $regex: jobPosition, $options: "i" },
              ...filter,
          },
          {
              jobPosition: 1,
              salary: 1,
              addLogo: 1,
              location: 1,
              skills: 1,
              companyName: 1,
          }
      );
  
      res.json(jobList);
  } catch (error) {
      res.status(402).json({message:"Bad Request..."})
  }
  };

const getJobById = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    const jobDetails = await Job.findById(jobId);
    res.status(200).json(jobDetails);
  } catch (error) {
    res.status(400).json({ message: "Bad Request..." });
  }
};

const updateJobDetailsById = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    if (!jobId) {
      return res.status(400).json({ message: "Bad Request..." });
    }

    const {
      companyName,
      jobPosition,
      salary,
      jobType,
      location,
      jobDescription,
      skills,
    } = req.body;
    const updatedJob = await Job.updateOne(
      { _id: jobId },
      {
        $set: {
          companyName,
          jobPosition,
          salary,
          jobType,
          location,
          jobDescription,
          skills,
        },
      }
    );
    res.json({ message: "Job has been updated...", updatedJob });
  } catch (error) {
    res.status(400).json({ message: "Can't update due to internal issue..." });
  }
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


    
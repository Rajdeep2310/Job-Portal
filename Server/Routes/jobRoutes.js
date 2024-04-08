const express = require("express");
const jobRouter = express.Router();
const{creatingJob,getAllJob, getJobById , testApi} = require("../Controllers/authJobControllers");

//  Creat a job , fetch all Jobs , get job By id
jobRouter.get("/health", testApi)
jobRouter.post("/create-job", creatingJob);
jobRouter.get("/getAll" , getAllJob);
jobRouter.get("/getJob/:id", getJobById)

module.exports = jobRouter;
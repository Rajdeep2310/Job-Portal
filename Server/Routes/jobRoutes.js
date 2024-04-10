const express = require("express");
const jobRouter = express.Router();
const {
  creatingJob,
  getAllJob,
  getJobById,
  testApi,
  updateJobDetailsById,
} = require("../Controllers/authJobControllers");
const verifyToken = require("../Middlewares/verifyToken");

//  Creat a job , fetch all Jobs , get job By id
jobRouter.get("/health", testApi);
jobRouter.post("/createJob", verifyToken, creatingJob);
jobRouter.put("/update/:jobId", verifyToken, updateJobDetailsById);
jobRouter.get("/getAll", verifyToken, getAllJob);
jobRouter.get("/getJob/:jobId", getJobById);

module.exports = jobRouter;

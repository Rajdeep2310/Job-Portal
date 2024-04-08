const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({}, { timestamps: true });

const Job = new mongoose.model("Job", jobSchema);
module.exports = Job;

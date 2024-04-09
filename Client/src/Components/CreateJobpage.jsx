import { useState } from "react";
import { createJobPost } from "../Apis/job";

const CreateJobpage = () => {
  const [formData, setFormData] = useState({
    companyName:"",
    jobPosition:"",
    jobDescription:"",
    location:"",
    jobType:"",
    salary:"",
    skills:"",
  });
  console.log(formData)
  const handleFormChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})

  }

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    await createJobPost({...formData})

  }

  return (
  <div className="flex justify-center p-10">
  <div className="w-full md:w-3/4 lg:w-1/2">
    <button 
      type="submit"
      onClick={handleFormSubmit}
      className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg mb-6 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      Create Job
    </button>
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-xl font-semibold mb-6 text-gray-900 text-center">
        Profile
      </h2>
      <p className="text-sm text-gray-600 text-center mb-8">
        This information will be displayed publicly so be careful what you share.
      </p>

      <div className="grid grid-cols-1 gap-6">
        <div>
          <label htmlFor="job_position" className="block text-sm font-medium text-gray-900 mb-1">
            Job Position
          </label>
          <input
            type="text"
            onChange={handleFormChange}
            value={formData.jobPosition}
            name="jobPosition"
            className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter job position"
          />
        </div>

        <div>
          <label htmlFor="job_title" className="block text-sm font-medium text-gray-900 mb-1">
            Company Name
          </label>
          <input
            type="text"
            onChange={handleFormChange}
            value = {formData?.companyName}
            name="companyName"
            className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter job title"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-900 mb-1">
            Description
          </label>
          <textarea
            value={formData?.jobDescription}
            onChange={handleFormChange}
            name="jobDescription"
            className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Write a few sentences about yourself."
          />
        </div>

        <div>
          <label htmlFor="salary" className="block text-sm font-medium text-gray-900 mb-1">
            Salary (INR/month)
          </label>
          <input
            type="number"
            name="salary"
            onChange={handleFormChange}
            value={formData?.salary}
            className="w-fullrounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter salary"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-900 mb-1">
            Location
          </label>
          <input
            type="text"
            name="location"
            onChange={handleFormChange}
            value={formData?.location}
            className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter location"
          />
        </div>

        <div>
          <label htmlFor="job_type" className="block text-sm font-medium text-gray-900 mb-1">
            Job Type
          </label>
          <input
            type="text"
            name="jobType"
            onChange={handleFormChange}
            value={formData?.jobType}
            className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter job type"
          />
        </div>

        <div>
          <label htmlFor="skills" className="block text-sm font-medium text-gray-900 mb-1">
            Skills
          </label>
          <input
            type="text"
            name="skills"
            onChange={handleFormChange}
            value={formData.skills}
            className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter skills"
          />
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default CreateJobpage;

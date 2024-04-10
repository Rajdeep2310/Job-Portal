import styles from "./Styles/Jobpost.module.css";
import { useState, useEffect } from "react";
import { createJobPost , updateJob  } from "../Apis/Job";
import { DEFAULT_SKILLS } from  "../Utils/Constants";
import { useLocation } from "react-router-dom";

const Jobpost = () => {
  const { state } = useLocation();
  const [stateData] = useState(state?.jobDetails);
  console.log(stateData)
  const [formData, setFormData] = useState({
    companyName: ""  || stateData?.companyName,
    jobDescription: ""  || stateData?.jobDescription,
    jobPosition: ""  || stateData?.jobPosition,
    salary: ""  || stateData?.salary,
    location: ""  || stateData?.location,
    jobType: "" || stateData?.jobType,
    skills: stateData?.skills || [],
  });
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (state?.edit) {
      updateJob(state?.id, formData);
      return;
  }
    await createJobPost(formData);
  };

  const addSkills = (event) => {
    const skill = event.target.value;
    const actualSkills = formData.skills;
    const filteredSkills = actualSkills.filter((element) => element == skill);
    if (!filteredSkills.length) {
      const updatedSkills = [...formData.skills, skill];
      setFormData({ ...formData, skills: updatedSkills });
    }
  };

  const removeSkill = (skill) => {
    const actualSkills = formData.skills;
    const filteredSkills = actualSkills.filter((element) => element !== skill);

    setFormData({ ...formData, skills: filteredSkills });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Add job description</h1>
      <div className={styles.jobForm}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="companyName">
            Company Name:
          </label>
          <input
            className={styles.input}
            type="text"
            value={formData.companyName}
            onChange={handleFormChange}
            name="companyName"
            placeholder="Enter company name"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="jobPosition">
            Position:
          </label>
          <input
            className={styles.input}
            type="text"
            name="jobPosition"
            value={formData.jobPosition}
            onChange={handleFormChange}
            placeholder="Enter job position"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="salary">
            Salary:
          </label>
          <input
            className={styles.input}
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleFormChange}
            placeholder="Enter job salary"
          />
        </div>

        <div className={styles.selectGroup}>
          <label className={styles.label} htmlFor="jobType">
            Job Type:
          </label>
          <select
            className={styles.select}
            name="jobType"
            value={formData.jobType}
            onChange={handleFormChange}
          >
            <option value="">Select job type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="location">
            Location:
          </label>
          <input
            className={styles.location}
            type="text"
            value={formData.location}
            onChange={handleFormChange}
            name="location"
            placeholder="Enter job location"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="jobDescription">
            Description:
          </label>
          <textarea
            className={styles.input}
            value={formData.jobDescription}
            onChange={handleFormChange}
            name="jobDescription"
            placeholder="Enter job description"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="skills">
            Skills:
          </label>
          {/* <input
            className={styles.input}
            type="text"
            name="skills"
            placeholder="skills"
            value={formData.skills}
            onChange={handleFormChange}
          /> */}
          <select className={styles.input} name="skills" onChange={addSkills}>
            <option disabled selected>
              Please select skills:
            </option>
            {DEFAULT_SKILLS.map((element) => (
              <option key={element}>{element}</option>
            ))}
          </select>
        </div>
        <div>
          {formData?.skills?.map((element) => (
            <span key={element}>{element}&nbsp;
              <button onClick={() => removeSkill(element)}>X</button>
            </span>
          ))}
        </div>
      </div>
      <button className={styles.add} onClick={handleSubmit}>
      {state?.edit ? "Edit Job" : "+ Add Job "}
      </button>
      <button className={styles.cancel}>Cancel</button>
    </div>
  );
};
export default Jobpost;

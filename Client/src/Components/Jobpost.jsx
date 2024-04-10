import styles from "./Styles/Jobpost.module.css";
import { useState, useEffect} from "react";
import { createJobPost} from "../Apis/Job";

const Jobpost = () =>  {
    const [formData , setFormData] = useState({
        companyName:"",
        jobDescription:"",
        jobPosition:"",
        salary:"",
        location:"",
        jobType:"",
        skills:[],
    })
    const handleFormChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        await createJobPost(formData);
    }

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
          <select className={styles.select} name="jobType" value={formData.jobType}
            onChange={handleFormChange}>
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
          <input
            className={styles.input}
            type="text"
            name="skills"
            placeholder="skills"
            value={formData.skills}
            onChange={handleFormChange}
          />
        </div>
      </div>
      <button className={styles.add} onClick={handleSubmit}>+ Add Job</button>
      <button className={styles.cancel}>Cancel</button>
    </div>
  );
}
export default Jobpost;
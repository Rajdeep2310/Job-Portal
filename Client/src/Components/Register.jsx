import styles from "./Styles/Register.module.css";
import { registerUser } from "../Apis/User";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [formData , setFormData ]  = useState({
        username:"",
        email:"",
        mobile:"",
        password:"",
     })
     const handleFormChange = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
     }
     const handleSubmit = async () => {
        if (!formData.email || !formData.password || !formData.mobile || !formData.username) {
            alert("Fields can't be empty");
        }
        const response = await registerUser({ ...formData });
        console.log(response)
    };


  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Create an account</h1>
      <h2 className={styles.h2}>Your personal job finder is here</h2>
      <input
        className={styles.input}
        name="username"
        value = {formData.username}
        type="text"
        placeholder="UserName"
        onChange={handleFormChange}
      ></input>
      <input
        className={styles.input}
        name="email"
        value={formData.email}
        type="email"
        placeholder="Email"
        onChange={handleFormChange}
      ></input>
      <input
        className={styles.input}
        name="mobile"
        value={formData.mobile}
        type={"mobile"}
        placeholder="Mobile"
        onChange={handleFormChange}
      ></input>
      <input
        className={styles.input}
        value={formData.password}
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleFormChange}
      ></input>
      <button className={styles.button} onClick={handleSubmit}>Create Account</button>
      {/* <Button>Create account</Button> */}
      <p className={styles.footer}>
        Already have an account?
        <Link to="/login">
        <span className={styles.underline}>Sign in</span>
        </Link>
      </p>
    </div>
  );
};

export default Register;

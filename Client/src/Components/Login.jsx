import { useState } from "react";
import styles from "./Styles/Login.module.css";
import { loginUser } from "../Apis/User";
import {Link , useNavigate }  from "react-router-dom"
const Login = () => {
  const navigate = useNavigate();
  const [formData , setFormData] = useState({
    email:"",
    password:"",
  })

  const handleFormChange = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
 }
  const handleSubmit = async () => {
    if (!formData.email || !formData.password) {
        alert("Fields can't be empty");
        return; // Stop further execution if fields are empty
    }

    const response = await loginUser(formData.email, formData.password);
    if (response?.username) {
        localStorage.setItem("token", response.token);
        navigate("/");
    }
};
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Already have an account ?</h1>
      <h2 className={styles.h2}>Your personal job finder is here</h2>
      <input
        className={styles.input}
        name="email"
        value={formData.email}
        onChange={handleFormChange}
        type="email"
        placeholder="Email"
      ></input>
      <input
        className={styles.input}
        name="password"
        type="password"
        value={formData.password}
        onChange={handleFormChange}
        placeholder="Password"
      ></input>
      <button className={styles.button} onClick={handleSubmit}>Sign in</button>
      <p className={styles.footer}>
        Don&apos;t have an account?
        <Link to="/register">
        <span className={styles.underline}>Sign Up</span>
        </Link>
      </p>
    </div>
  );
};

export default Login;

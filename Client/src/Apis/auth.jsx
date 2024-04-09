import axios from "axios";

const backend_URL = "http://localhost:1000/api";

export const loginUser = async (email, password) => {
  try {
    const reqUrl = `${backend_URL}/login`;
    const response = await axios.post(reqUrl, { email, password });
    return response;
  } catch (error) {
    console.log(error);
    alert("Something went wrong !");
  }
};


export const registerUser = async ({username, email, password}) => {
    try {
      const reqUrl = `${backend_URL}/register`;
      const response = await axios.post(reqUrl, {
        username,
        email,
        password,
      });
      console.log(response);
      return response
    } catch (error) {
      console.log(error);
      alert("Something went wrong !");
    }
  };
  
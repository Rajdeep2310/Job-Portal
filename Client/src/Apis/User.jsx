import axios from "axios";
const BACKEND_URL = "http://localhost:1000/api";

export const registerUser = async({ username , email, mobile , password }) => {
    try{
        const reqUrl = `${BACKEND_URL}/register`;
        const response = await axios.post(reqUrl, { username , email , mobile, password });
        return response.data
    }catch(error){
        console.log(error);
    }
}

export const loginUser = async(email, password) => {
    try {
        const reqUrl = `${BACKEND_URL}/login`;
        const response = await axios.post(reqUrl, { email, password });
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error);
        // toast something went wrong please try after sometime
    }
};





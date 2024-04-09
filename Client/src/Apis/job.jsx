import axios from "axios";

export const createJobPost = async (JobPostPayload) => {
    try {
        const reqUrl = `http://localhost:1000/api/auth/createJob`;
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        const response = await axios.post(reqUrl, JobPostPayload);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
};
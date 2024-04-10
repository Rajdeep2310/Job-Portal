import axios from "axios"
const BACKEND_URL = "http://localhost:1000/api/auth"


export const createJobPost =  async(jobPostPayload) => {
    try{
        const reqUrl = `${BACKEND_URL}/createJob`
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await axios.post(reqUrl, jobPostPayload);
        return response.data;
    }catch(error){
        console.log(error)
    }
}
export const getJobDetailsById = async (jobId) => {
    try {
        const reqUrl = `${BACKEND_URL}/getJob/${jobId}`;
        const response = await axios.get(reqUrl);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const updateJob = async(jobPostId , updatedFormData) => {
    try{
        const reqUrl =`${BACKEND_URL}/update/${jobPostId}`
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await axios.put(reqUrl, updatedFormData);
        return response.data;
    } catch (error) {
        console.log(error);
        // toast something went wrong please try after sometime
    }
}


export const getAllJobPost = async (filter) => {
    try {
        const reqUrl = `${BACKEND_URL}/getAll?jobPosition=${filter?.title}&skills=${filter?.skills}`;
        const response = await axios.get(reqUrl);
        return response.data;
    } catch (error) {
        console.log(error);
        // toast something went wrong please try after sometime
    }
};
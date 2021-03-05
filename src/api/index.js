import axios from "axios";

let axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default axiosInstance;

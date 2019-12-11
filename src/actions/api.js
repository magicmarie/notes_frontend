import axios from "axios";

import Config from "../config";

// append the baseURL and headers
const axiosInstance = axios.create({
  baseURL: Config.BASE_URL,
  headers: { 
    'Content-Type': 'application/json',
    Authorization: `${localStorage.getItem("token")}` }
});

export default ({ method, url, data }) => axiosInstance({
  url,
  method,
  data,
});

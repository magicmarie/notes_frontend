import axios from "axios";

import Config from "../config";

// append the baseURL and headers
const axiosInstance = axios.create({
  baseURL: Config.BASE_URL,
  headers: { 
    'Content-Type': 'application/json',
    token: `${localStorage.getItem("token")}` }
});

axiosInstance.interceptors.request.use(config => {
  // if token exists in localstorage but headers.token is empty, add the the token to it
  if (localStorage.getItem("token") && config.headers.token === "null") {
    config.headers.token = `${localStorage.getItem("token")}`;
  }
  return config;
});

export default ({ method, url, data }) => axiosInstance({
  url,
  method,
  data,
});
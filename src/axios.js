import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:3001"
  baseURL: process.env.REACT_APP_SERVER
  // baseURL: "http://172.20.4.126"
});

export default instance;
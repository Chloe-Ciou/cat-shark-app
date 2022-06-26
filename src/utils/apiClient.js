import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.API_CLIENT_URL || "http://127.0.0.1:3000"
});

export default apiClient;

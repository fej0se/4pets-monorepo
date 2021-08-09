import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001/api/v1",
  headers: { "Access-Control-Allow-Origin": "false" },
});

export default api;

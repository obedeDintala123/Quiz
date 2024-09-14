import axios from "axios";

// Create a new instance of axios
const api = axios.create({
  baseURL: "https://back-end-llxf.onrender.com",
});

export default api;

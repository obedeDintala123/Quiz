import axios from "axios";

// Create a new instance of axios
const api = axios.create({
  baseURL: "https://back-end-red-ten.vercel.app/",
});

export default api;

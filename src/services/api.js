import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getMedicines = () => {
  return API.get("/medicines");
};

export const loginUser = (data) => {
  return API.post("/auth/login", data);
};
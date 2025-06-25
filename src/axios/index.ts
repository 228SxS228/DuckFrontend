import axios from "axios";

console.log(import.meta.env.VITE_API_BASE_URL);

export const baseAPI = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

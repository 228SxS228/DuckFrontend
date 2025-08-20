import axios from "axios";

export const baseAPI = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 9000,
  headers: {
    "Content-Type": "application/json",
  },
});

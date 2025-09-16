import axios from "axios";

// export const baseAPI = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL,
//   timeout: 9000,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
export const workerAPI = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

workerAPI.interceptors.request.use((config) => {
  config.headers = config.headers || {};
  return config;
});

// Обработка ошибок
workerAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);
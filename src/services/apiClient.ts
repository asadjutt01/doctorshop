import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { getItem } from "../utils/localStorage/localStorage"; // Ensure getItem fetches from localStorage

const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Set your base URL in .env file
  timeout: 10000, // Request timeout
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Add interceptors to attach auth token
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Ensure headers are defined
    config.headers = config.headers ?? {};

    // Get the authToken from localStorage
    const token = getItem("authToken");

    // If token exists, attach it to the Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response.data; // Return only the response data
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized! Token might be invalid or expired.");
    }
    return Promise.reject(error);
  }
);

export default apiClient;

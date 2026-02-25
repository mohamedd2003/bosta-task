import axios, { AxiosError, AxiosResponse } from "axios";
import cookies from 'js-cookie'
export const API_BASE_URL = process.env.API_URL;
// Note: We use relative URLs in apiClient because Next.js rewrites /api/* to the backend

// Define the standard API Response interface

// Create axios instance with default configuration
export const apiClient = axios.create({
  baseURL: "https://fakestoreapi.com", // Use empty baseURL since Next.js rewrites /api/* to the backend
  timeout: 25000,
  headers: {
    "Content-Type": "application/json",

  },
});

// Request interceptor to add authorization header
apiClient.interceptors.request.use(
  (config) => {
    // Add authorization header if token exists
    const token = cookies.get("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor to handle 401 errors
apiClient.interceptors.response.use((response: AxiosResponse) => {
  return response;
},
  (error: AxiosError) => {
    console.log('Axios Error Details:', {
      message: error.message,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      config: error.config,
      isAxiosError: error.isAxiosError
    });

   
  

    return Promise.reject(error);
  }
);



// Export the configured axios instance for use in services
export default apiClient;

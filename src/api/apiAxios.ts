import axios, { type AxiosInstance } from "axios";


const apiAxios: AxiosInstance = axios.create({
  baseURL: 'https://localhost:7038/api',
  timeout: 1000
});


apiAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default apiAxios;

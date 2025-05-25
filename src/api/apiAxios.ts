import axios from "axios";



const apiAxios = axios.create({
  baseURL: 'https://localhost:7038/api',
  timeout: 1000,
  headers: {'Authorization': ''}
});

apiAxios.interceptors.request.use(
    config => {
      config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
          return config;
      },
      error => {
          return Promise.reject(error);
      }
  );

export default apiAxios;

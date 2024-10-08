import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); 

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config; 
  },
  (error) => {
    return Promise.reject(error); 
  }
);

API.interceptors.response.use(
  (response) => {
    return response; 
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("Token expirado ou não autorizado, faça o logout");
      localStorage.clear();
      window.location.href = '/';
    }

    return Promise.reject(error);
  }
);

export default API;

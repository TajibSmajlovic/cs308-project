import axios from 'axios';
// import store from '../store/config';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api',
});

// axiosInstance.interceptors.request.use((config) => {

//     let token;
  
//     const state = store.getState();
//     if(state.auth.token){
//         token = state.auth.token
//     }else {
//         token = localStorage.getItem('token');
//     }

//     config.headers.Authorization = `Bearer ${token}`;

//     return config;
//   }, (err) => Promise.reject(err));

// module.exports = axiosInstance;
export default axiosInstance;
import axios from 'axios';

const API_URL = 'http://localhost:3333';

export const api = axios.create({
    baseURL: API_URL,
    headers:{
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('@HealthHub:token')
    if(token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})
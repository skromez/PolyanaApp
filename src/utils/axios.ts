import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://0d33ba310edb.ngrok.io/api',
    timeout: 10000,
    withCredentials: true,
});


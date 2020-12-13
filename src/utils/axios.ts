import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://a7c2bfb396dd.ngrok.io/api',
    timeout: 10000,
    withCredentials: true,
});


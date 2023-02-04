import axios from "axios";

const api_back = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    withCredentials: false
});

export default api_back;
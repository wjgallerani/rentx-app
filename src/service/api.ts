import axios from "axios";

const api = axios.create({
    baseURL: 'http://10.90.30.41:3333'
});

export default api;
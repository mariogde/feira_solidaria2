import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VINT_API_URL, //usa variavel de ambiente
});

export default api;
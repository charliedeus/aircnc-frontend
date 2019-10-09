import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.71.0.88:3333',
})

export default api;
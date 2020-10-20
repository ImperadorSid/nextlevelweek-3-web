import axios from 'axios';
import { getToken } from 'services/auth';

const api = axios.create(

  {

    baseURL: 'http://localhost:3333',
  },
);

api.interceptors.request.use((config) => {
  const token = getToken();
  const newConfig = config;

  if (token) { newConfig.headers.Authorization = `Bearer ${token}`; }

  return config;
});

export default api;

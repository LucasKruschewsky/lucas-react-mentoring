import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.API_URL,
  validateStatus: (status) => status >= 200 && status < 500,
});

export const axiosImageCheck = axios.create({
  validateStatus: (status) => status >= 200 && status < 500,
});

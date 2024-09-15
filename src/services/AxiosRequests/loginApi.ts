import axios from 'axios';

const port = 5000;
const baseUrl = `http://localhost:${port}/api`;

const loginApi = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default loginApi;

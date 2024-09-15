/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios';

const port = 5000;
const baseUrl = `http://localhost:${port}/api`;

export const api = axios.create({
  baseURL: baseUrl,
});

/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios';

const port = 5000;

export const api = axios.create({
  baseURL: `http://localhost:${port}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

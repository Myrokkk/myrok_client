import axios from 'axios';
import { handleAPIError } from '~/apis/interceptors';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

instance.interceptors.response.use((response) => response, handleAPIError);

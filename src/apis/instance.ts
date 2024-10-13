import axios from 'axios';
import { handleAPIError } from '~/apis/interceptors';

export const { REACT_APP_BASE_URL: baseUrl } = process.env;

const BASE_URL = baseUrl === undefined ? '' : baseUrl;

export const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

instance.interceptors.response.use((response) => response, handleAPIError);

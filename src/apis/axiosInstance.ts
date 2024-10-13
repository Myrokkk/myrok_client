import axios from 'axios';

import {
  checkAndSetToken,
  handleAPIError,
  handleTokenError,
} from '~/apis/interceptors';

const { REACT_APP_BASE_URL: baseUrl } = process.env;

const BASE_URL = baseUrl === undefined ? '' : baseUrl;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(checkAndSetToken, handleAPIError);

axiosInstance.interceptors.response.use(
  (response) => response,
  handleTokenError,
);

axiosInstance.interceptors.response.use((response) => response, handleAPIError);

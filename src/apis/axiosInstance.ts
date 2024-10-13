import axios from 'axios';

import {
  checkAndSetToken,
  handleAPIError,
  handleTokenError,
} from '~/apis/interceptors';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(checkAndSetToken, handleAPIError);

axiosInstance.interceptors.response.use(
  (response) => response,
  handleTokenError,
);

axiosInstance.interceptors.response.use((response) => response, handleAPIError);

import axios from 'axios';

import {
  checkAndSetToken,
  handleAPIError,
  handleTokenError,
} from '~/apis/interceptors';

export const axiosInstance = axios.create({
  baseURL: 'https://b0990339c78d470de00d3dd32dd4db7f1.apppaas.app',
  withCredentials: true,
});

axiosInstance.interceptors.request.use(checkAndSetToken, handleAPIError);

axiosInstance.interceptors.response.use(
  (response) => response,
  handleTokenError,
);

axiosInstance.interceptors.response.use((response) => response, handleAPIError);

import axios from 'axios';
import { handleAPIError } from '~/apis/interceptors';

export const instance = axios.create({
  baseURL: 'https://b0990339c78d470de00d3dd32dd4db7f1.apppaas.app',
  withCredentials: true,
});

instance.interceptors.response.use((response) => response, handleAPIError);

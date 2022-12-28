import axios from 'axios';
import store from '../redux/reducers';
import {axiosError} from './axiosError';

const url = 'https://api.finploy.in/api/v1/';

const axiosInstance = axios.create({
  timeout: 30000,
  timeoutErrorMessage:
    'Network request timed out. The app could not connect to the server. Please make sure you are connected with a good network.',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // 'App-Version': getVersion(),
    // Timezone: getTimeZone(),
    // 'Device-Model': getModel(),
  },
});
axiosInstance.interceptors.request.use(
  request => {
    let token = store.getState()?.partnerUserReducer.token;

    request.baseURL = __DEV__ ? url : url;
    if (request.headers) {
      request.headers.Authorization = `Bearer ${token}`;
      // request.headers.lng = language;
    }
    return request;
  },
  error => {
    throw error;
  },
);
axiosInstance.interceptors.response.use(
  (res: any) => {
    if (res.status === 200 || 201) {
      // showMessage({ isVisible: true, message: res.data.message });
      return res;
    }
  },
  err => axiosError(err),
);
export {axiosInstance};

import Axios from 'axios';
import {BASE_API_URL} from './EndPoints';

import storage from './storage';
const setupAxios = (token?: string) => {
  Axios.defaults.baseURL = BASE_API_URL.API_URL;

  if (token) {
    // Apply to every request
    Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    // Axios.defaults.headers.common['Content-Type'] = 'application/json'
  } else {
    // Delete auth header
    delete Axios.defaults.headers.common.Authorization;
  }
};

Axios.interceptors.request.use(
  async reqConfig => {
    const savedTokenExpirationTime = await storage.getItem('expirationTime');
    const idToken = await storage.getItem('idToken');
    if (savedTokenExpirationTime > new Date().getTime()) {
      reqConfig.headers = {
        Authorization: `Bearer ${idToken}`,
        'Content-Type': 'application/json',
      };
    } else {
      if (idToken) {
        const idToken = await storage.getItem('idToken');
        if (idToken) {
          reqConfig.headers = {
            Authorization: `Bearer ${idToken}`,
            'Content-Type': 'application/json',
          };
        }
      } else {
        reqConfig.headers = {};
      }
    }
    console.log('reqConfig ::::::', reqConfig);
    return reqConfig;
  },
  error => {
    console.log('error :', error);
    return Promise.reject(error);
  },
);
Axios.interceptors.response.use(
  response => {
    try {
      console.log('[RESPONSE]', response);
    } catch (e) {
      console.log('SETUP_AXIOS: ', e);
    }
    return response;
  },
  error => {
    console.log('[ERROR]', {Request: error});
    return Promise.reject(error);
  },
);

export default setupAxios;

import {axiosInstance} from './axiosInstance';

export const login = (data: any) =>
  axiosInstance.post('partner/loginWithOtp', data).then(res => res?.data);

export const verifyLogin = (data: any) =>
  axiosInstance.post('partner/verifyLoginWithOtp', data).then(res => res?.data);

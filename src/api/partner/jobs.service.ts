import {axiosInstance} from '../axiosInstance';

export const login = (data: any) =>
  axiosInstance.get('partner/getAllJob', {params: data}).then(res => res?.data);

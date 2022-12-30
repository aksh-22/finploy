import {axiosInstance} from '../axiosInstance';

export const getAllJobs = (data: any) =>
  axiosInstance.get('partner/getAllJob', {params: data}).then(res => res?.data);

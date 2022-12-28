export const BASE_API_URL = {
  // API_URL: 'http://ec2-15-207-51-90.ap-south-1.compute.amazonaws.com:8000/',
  API_URL: 'http://192.168.0.8:5000/',
};

export default {
  user: {
    //Auth Endpoints
    register: `api/v1/user/register`,
    login: `api/v1/user/login`,
    registerwithOtp: `api/v1/user/registerwithOtp`,
    verfiyResisterdOtp: `api/v1/user/verfiyResisterdOtp`,
    loginWithOtp: `api/v1/user/loginwithOtp`,
    verifyLoginWithOtp: `api/v1/user/verfiyResisterdOtp`,

    //
    getProfile: `api/v1/user/getProfile`,
    // All jobs Endpoints
    getAllJob: `api/v1/user/getAllJob`,
  },
};

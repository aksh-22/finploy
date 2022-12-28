import {AxiosError} from 'axios';
// import {showMessage} from 'src/components/MessageModal';

export const axiosError = async (err: AxiosError<any>) => {
  console.error('err', err.response?.data.message);
  console.log('err', err.message);

  // showMessage({
  //   modalType: 'Error',
  //   message: err.response.data?.errors,
  // });

  throw err;
};

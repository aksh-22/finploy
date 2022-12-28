import {Dispatch} from 'redux';
import {storeUserDetails, setAccessToken} from '../creators/AuthCreators';
import {AppActionTypes} from '../types';
import {executeGetRequest, executePostRequest} from '../../Utils/Methods';
import {setLoading} from '../creators/LoadingCreator';
import storage from '../../Utils/storage';
import vars from '../../Utils/vars';
import {Platform} from 'react-native';
import {RootState} from '../reducers';
import {setInspection} from '../creators/AddInspection';
import EndPoints from '../../Utils/EndPoints';

export const LoginAction = (data: any) => {
  return async (dispatch: Dispatch<AppActionTypes>) => {
    dispatch(setLoading(true));
    try {
      const {response, error} = await executePostRequest(
        EndPoints.user.register,
        data,
      );
      if (response?.messageID == 200) {
      }
      dispatch(setLoading(false));
      return response;
    } catch (error) {
      dispatch(setLoading(false));
      return error || error;
    }
  };
};

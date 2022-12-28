import {
  AuthActionType,
  SET_USER_NUMBER,
  SET_USER_LOCATION,
  SET_USER_INFO,
  CLEAR_ALL,
  GET_TOKEN,
  GET_USER,
} from '../types';

export function setUserNumber(userNumber: number): AuthActionType {
  return {
    type: SET_USER_NUMBER,
    payload: {
      userNumber: userNumber,
    },
  };
}
export function storeUserDetails(userInfo: Object): AuthActionType {
  return {
    type: SET_USER_INFO,
    payload: userInfo,
  };
}

export function storeUserCurrentLocation(location: Object) {
  return {
    type: SET_USER_LOCATION,
    payload: location,
  };
}
export function setAccessToken(token: string): AuthActionType {
  console.log(token, '---------------Redux');
  return {
    type: GET_TOKEN,
    payload: token,
  };
}
export function clearAll(): AuthActionType {
  return {
    type: CLEAR_ALL,
    payload: {
      token: undefined,
    },
  };
}
export function clearSearchText(): AuthActionType {
  return {
    type: CLEAR_ALL,
    payload: '',
  };
}

import {LOADING_STATUS} from '../types';

export function setLoading(loadingStatus: boolean) {
  return {
    type: LOADING_STATUS,
    payload: loadingStatus,
  };
}

import {
  AUTH_LOADING_STATUS,
  CLEAR_ALL,
  AuthLoadingActionType,
} from "../types";

export interface LoadingState {
  AuthLoadingStatus: boolean;
}

const INITIAL_STATE: LoadingState = {
  AuthLoadingStatus: false,
};

export default (
  state = INITIAL_STATE,
  action: AuthLoadingActionType
): LoadingState => {
  switch (action.type) {
    case CLEAR_ALL:
      return INITIAL_STATE;
    case AUTH_LOADING_STATUS:
      return { ...state, AuthLoadingStatus: action.payload };
    default:
      return state;
  }
};

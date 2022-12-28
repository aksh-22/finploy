import { RELOAD_INSPECTIONS, CLEAR_ALL, ReloadActionType } from "../types";

export interface LoadingState {
  ReloadStatus: boolean;
}

const INITIAL_STATE: LoadingState = {
  ReloadStatus: false,
};

export default (
  state = INITIAL_STATE,
  action: ReloadActionType
): LoadingState => {
  switch (action.type) {
    case CLEAR_ALL:
      return INITIAL_STATE;
    case RELOAD_INSPECTIONS:
      return { ...state, ReloadStatus: action.payload };
    default:
      return state;
  }
};

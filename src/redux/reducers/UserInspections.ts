import {
  ADD_INSPECTIONS,
  CLEAR_ALL,
  UserInspectionsActionType,
} from "../types";

export interface UserInspection {
  Inspections: Array<any>;
}

const INITIAL_STATE: UserInspection = {
  Inspections: [],
};

export default (
  state = INITIAL_STATE,
  action: UserInspectionsActionType
): UserInspection => {
  switch (action.type) {
    case CLEAR_ALL:
      return INITIAL_STATE;
    case ADD_INSPECTIONS:
      return { ...state, Inspections: action.payload };
    default:
      return state;
  }
};

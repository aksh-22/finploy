import {SET_PARTNER_USER, partnerActionType, SET_PARTNER_TOKEN} from '../types';

export interface initialState {
  user: any;
  token: string;
}

const initialState: initialState = {
  user: {},
  token: '',
};

export default (
  state = initialState,
  action: partnerActionType,
): initialState => {
  switch (action.type) {
    case SET_PARTNER_USER:
      return initialState;

    case SET_PARTNER_TOKEN:
      return initialState;
    default:
      return state;
  }
};

import {useDispatch} from 'react-redux';
import storage from '../Utils/storage';

export type partnerActionType = {
  ACTION: 'SET_PARTNER_USER' | 'SET_PARTNER_TOKEN';
};

const usePartnerDispatch = ({ACTION}: partnerActionType) => {
  const dispatch = useDispatch();

  const onAction = (payload: any) => {
    dispatch({type: ACTION, payload});
    storage.setItem(ACTION, payload);
  };

  return {onAction};
};

export default usePartnerDispatch;

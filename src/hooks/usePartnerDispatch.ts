import {useDispatch} from 'react-redux';

type Props = {
  ACTION: 'SET_PARTNER_USER' | 'SET_PARTNER_TOKEN';
};

const usePartnerDispatch = ({ACTION}: Props) => {
  const dispatch = useDispatch();

  const onAction = (payload: any) => {
    dispatch({type: ACTION, payload});
  };

  return {onAction};
};

export default usePartnerDispatch;

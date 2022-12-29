import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import usePartnerDispatch from '../../hooks/usePartnerDispatch';
import storage from '../../Utils/storage';
import HeaderPartner from './../../components/Header-p';
import PartnerAuthStack from './PartnerAuthStack';
import PartnerTabs from './PartnerTabs';

const Stack = createNativeStackNavigator();

const PartnerStack = () => {
  const token = useSelector((state: any) => state.partnerUserReducer.token);
  const {onAction} = usePartnerDispatch({ACTION: 'SET_PARTNER_TOKEN'});

  useEffect(() => {
    storage.getItem('SET_PARTNER_TOKEN').then(val => {
      onAction(val);
    });
  }, []);

  return (
    <>
      {token && <HeaderPartner />}
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {token ? (
          <>
            <Stack.Screen name="PartnerTabs" component={PartnerTabs} />
          </>
        ) : (
          <Stack.Screen name="PartnerAuthStack" component={PartnerAuthStack} />
        )}
      </Stack.Navigator>
    </>
  );
};

export default PartnerStack;

{
  /* <Stack.Screen
  options={{headerShown: false}}
  name="Menu-p"
  component={MainMenu}
/>; */
}

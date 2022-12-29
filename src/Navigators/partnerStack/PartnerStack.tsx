import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import PartnerAuthStack from './PartnerAuthStack';
import PartnerTabs from '../PartnerTabs';
import PartnerMenu from './PartnerMenu';
import storage from '../../Utils/storage';
import usePartnerDispatch from '../../hooks/usePartnerDispatch';

const Stack = createNativeStackNavigator();

const PartnerStack = () => {
  const token = useSelector((state: any) => state.partnerUserReducer.token);
  const {onAction} = usePartnerDispatch({ACTION: 'SET_PARTNER_TOKEN'});

  useEffect(() => {
    storage.getItem('SET_PARTNER_TOKEN').then(val => {
      console.log('val', val);
      onAction(val);
    });
  }, []);

  return (
    <>
      <StatusBar />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {token ? (
          <>
            <Stack.Screen name="PartnerTabs" component={PartnerTabs} />
            <Stack.Screen name="PartnerMenu" component={PartnerMenu} />
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

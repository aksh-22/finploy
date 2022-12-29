import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import PartnerAuthStack from './PartnerAuthStack';
import PartnerTabs from './PartnerTabs';

const Stack = createNativeStackNavigator();

const PartnerStack = () => {
  const token = useSelector((state: any) => state.partnerUserReducer.token);

  return (
    <>
      <StatusBar />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {token ? (
          <Stack.Screen name="PartnerTabs" component={PartnerTabs} />
        ) : (
          <Stack.Screen name="PartnerAuthStack" component={PartnerAuthStack} />
        )}
      </Stack.Navigator>
    </>
  );
};

export default PartnerStack;

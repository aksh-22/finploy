import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import PartnerLogin from '../Screens/Partner/auth/login/PartnerLogin';

const Stack = createNativeStackNavigator();

const PartnerAuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="PartnerLogin" component={PartnerLogin} />
    </Stack.Navigator>
  );
};

export default PartnerAuthStack;

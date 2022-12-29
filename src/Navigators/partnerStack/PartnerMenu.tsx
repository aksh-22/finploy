import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import Landing from '../../partner screen/landing/Landing';

type Props = {};

const Stack = createNativeStackNavigator();

const PartnerMenu = (props: Props) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Landing" component={Landing} />
    </Stack.Navigator>
  );
};

export default PartnerMenu;

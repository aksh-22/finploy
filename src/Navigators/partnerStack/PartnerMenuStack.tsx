import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainMenu from '../../Screens/partner screen/MainMenu/MainMenu';
import Jobs from '../../partner screen/Jobs/PartnerJobs';

type Props = {};

const Stack = createNativeStackNavigator();

const PartnerMenuStack = (props: Props) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainMenu" component={MainMenu} />
      <Stack.Screen name="PartnerJobs" component={Jobs} />
    </Stack.Navigator>
  );
};

export default PartnerMenuStack;

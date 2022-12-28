import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import HomeIcon from '../Assets/Svg/HomeIcon.svg';
import ReferCandidateIcon from '../Assets/Svg/ReferCandidateIcon.svg';
import ReferPartnerIcon from '../Assets/Svg/ReferPartnerIcon.svg';
import CustomerList from '../partner screen/CustomerList';
import Landing from '../partner screen/landing/Landing';
import MyCandidates from '../partner screen/MyCandidates';
import MyPartner from '../partner screen/MyPartner';
import ReferCandidate from '../partner screen/ReferCandidate';
import Referpartner1 from '../partner screen/Referpartner1';
// import { Image } from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Tab = createBottomTabNavigator();

const Partnertabs = () => {
  const navigation: any = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{tabBarHideOnKeyboard: true}}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Landing}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Landing');
              }}>
              <HomeIcon />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="ReferCandidate"
        component={ReferCandidate}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Refercandidate-p');
              }}>
              <ReferCandidateIcon />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="ReferPartner"
        component={Referpartner1}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Referpartner1-p');
              }}>
              <ReferPartnerIcon />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Status"
        component={CustomerList}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Customer-p');
              }}>
              <Image
                source={require('../Assets/folder-2.png')}
                style={{width: wp(6), height: hp(3)}}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="MyCandidate"
        component={MyCandidates}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Mycandidates-p');
              }}>
              <Image
                source={require('../Assets/people.png')}
                style={{width: wp(6), height: hp(3)}}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Mypartner"
        component={MyPartner}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Mypartner-p');
              }}>
              <Image
                source={require('../Assets/profile-2user.png')}
                style={{width: wp(6), height: hp(3)}}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Partnertabs;

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import HomeIcon from './../../Assets/Svg/HomeIcon.svg';
import ReferCandidateIcon from './../../Assets/Svg/ReferCandidateIcon.svg';
import ReferPartnerIcon from './../../Assets/Svg/ReferPartnerIcon.svg';
import CustomerList from './../../partner screen/CustomerList';
import Landing from './../../partner screen/landing/Landing';
import MyCandidates from './../../partner screen/MyCandidates';
import MyPartner from './../../partner screen/MyPartner';
import ReferCandidate from './../../partner screen/ReferCandidate';
import Referpartner1 from './../../partner screen/Referpartner1';
import PartnerMenuStack from './PartnerMenuStack';

const Tab = createBottomTabNavigator();

const PartnerTabs = () => {
  const navigation: any = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{tabBarHideOnKeyboard: true, headerShown: false}}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Landing}
        options={{
          headerShown: false,
          tabBarIcon: () => <HomeIcon />,
        }}
      />
      <Tab.Screen
        name="ReferCandidate"
        component={ReferCandidate}
        options={{
          tabBarIcon: () => <ReferCandidateIcon />,
        }}
      />
      <Tab.Screen
        name="ReferPartner"
        component={Referpartner1}
        options={{
          tabBarIcon: () => <ReferPartnerIcon />,
        }}
      />
      <Tab.Screen
        name="Status"
        component={CustomerList}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../Assets/folder-2.png')}
              style={{width: wp(6), height: hp(3)}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyCandidate"
        component={MyCandidates}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../Assets/people.png')}
              style={{width: wp(6), height: hp(3)}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Mypartner"
        component={MyPartner}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../Assets/profile-2user.png')}
              style={{width: wp(6), height: hp(3)}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PartnerMenuStack"
        component={PartnerMenuStack}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

export default PartnerTabs;

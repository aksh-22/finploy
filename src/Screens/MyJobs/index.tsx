import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllTab from '../TopTabScreens/AllTab';
import AppliedTab from '../TopTabScreens/AppliedTab';
import InterviewTab from '../TopTabScreens/InterviewTab';
import InvitedTab from '../TopTabScreens/InvitedTab';
import MatchingTab from '../TopTabScreens/MatchingJobsTab';
import NewOfferTab from '../TopTabScreens/NewOfferTab';
import ShortlistedTab from '../TopTabScreens/ShortlistedTab';
import {getIcons, Icons} from '../../Assets/Svg/Icons';
import HeaderBar from '../../components/Header';

const Tab = createMaterialTopTabNavigator();

const NewJobBtn = ({text, bgColor}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: bgColor,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          paddingHorizontal: 10,
          paddingVertical: 20,
        },
      ]}>
      <Text
        style={{
          color: 'white',
          fontWeight: '500',
          fontSize: 12,
          lineHeight: 14.52,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

function TopTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: {
          backgroundColor: 'black',
          height: 1,
        },
      }}>
      <Tab.Screen name="All" component={AllTab} />
      <Tab.Screen name="New Offer" component={NewOfferTab} />
      <Tab.Screen name="Applied" component={AppliedTab} />
      <Tab.Screen name="Shortlisted" component={ShortlistedTab} />
      <Tab.Screen name="Interview" component={InterviewTab} />
      <Tab.Screen name="Invited" component={InvitedTab} />
      <Tab.Screen name="Matching" component={MatchingTab} />
    </Tab.Navigator>
  );
}

export default function MyJobs(Props: any) {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <HeaderBar {...Props} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 20,
        }}>
        {getIcons(Icons.LEFT)}
        <Text
          style={{
            marginHorizontal: 20,
            fontSize: 18,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Back to Search Jobs
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginVertical: 10,
        }}>
        <NewJobBtn text={'New Job Offers'} bgColor="#175DA8" />
        <View style={{width: 20}} />
        <NewJobBtn text={'Active Jobs'} bgColor="#4EA647" />
        <View style={{width: 20}} />
        <NewJobBtn text={'Complete Jobs'} bgColor="#175DA8" />
      </View>
      {/*  */}
      <TopTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  newJobBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: '30%',
    height: 100,
    flex: 1,
  },
});

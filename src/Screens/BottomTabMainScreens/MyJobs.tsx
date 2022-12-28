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

// Importing Components && Icons
import LeftArrow from '../../Assets/Svg/LeftArrow.svg';
import {Header} from 'react-native-elements';
import MenuIcon from '../../Assets/Svg/MenuIcon';
//Top Tab Screens
import AllTab from '../TopTabScreens/AllTab';
import AppliedTab from '../TopTabScreens/AppliedTab';
import InterviewTab from '../TopTabScreens/InterviewTab';
import InvitedTab from '../TopTabScreens/InvitedTab';
import MatchingTab from '../TopTabScreens/MatchingJobsTab';
import NewOfferTab from '../TopTabScreens/NewOfferTab';
import ShortlistedTab from '../TopTabScreens/ShortlistedTab';

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
          width: '30%',
          height: 70,
          flex: 1,
        },
      ]}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14}}>
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
        flex: 1,
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

export default function MyJobs(props) {
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <Header
        placement="left"
        leftComponent={<MenuIcon style={{margin: 5}} />}
        centerComponent={
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../Assets/HeaderLogo.png')}
              style={{width: 137, height: 32}}
            />
          </View>
        }
        rightComponent={
          <View
            style={{
              height: 32,
              width: 32,
              borderRadius: 32,
              backgroundColor: '#175DA8',
            }}></View>
        }
        containerStyle={{
          backgroundColor: '#ffffff',
          justifyContent: 'center',
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 20,
        }}>
        <LeftArrow />
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  newJobBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5',
    width: '30%',
    height: 100,
    flex: 1,
  },
});

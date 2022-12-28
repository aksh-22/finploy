import {createStackNavigator} from '@react-navigation/stack';
import LaunchScreen from '../Screens/LaunchScreen';
import LaunchScreen2 from '../Screens/LaunchScreen2';
import LoginScreen from '../Screens/LoginScreen';
import OnbardingScreen from '../Screens/OnbardingScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileUpdate1 from '../Screens/ProfileUpdateScreens/ProfileUpdate1';
import ProfileUpdate2 from '../Screens/ProfileUpdateScreens/ProfileUpdate2';
import ProfileUpdate3 from '../Screens/ProfileUpdateScreens/ProfileUpdate3';
import ProfileUpdate4 from '../Screens/ProfileUpdateScreens/ProfileUpdate4';
import ProfileUpdate5 from '../Screens/ProfileUpdateScreens/ProfileUpdate5';
import ProfileUpdate6 from '../Screens/ProfileUpdateScreens/ProfileUpdate6';
import ProfileUpdate7 from '../Screens/ProfileUpdateScreens/ProfileUpdate7';
import ProfileUpdate8 from '../Screens/ProfileUpdateScreens/ProfileUpdate8';
import ProfileUpdate9 from '../Screens/ProfileUpdateScreens/ProfileUpdate9';
import ProfileUpdate10 from '../Screens/ProfileUpdateScreens/ProfileUpdate10';
import ProfileUpdate11 from '../Screens/ProfileUpdateScreens/ProfileUpdate11';
import FilterScreen from '../Screens/FilterScreen';
import MyTabs from './Tabs';
import JobDetails from '../Screens/JobDetails';
import ResumeProfileToFill from '../Screens/ResumeProfileToFill';
import LoginCandidate from '../Screens/Auth/LoginCandidate';
import {NavigationContainer} from '@react-navigation/native';
import International from './../Screens/Auth/International';
import {SafeAreaView, StatusBar} from 'react-native';
import Colors from '../Theme/Colors';
// import Landing from '../partner screen/landing';
import Talents from '../partner screen/Talents';
import Jobs from '../partner screen/Jobs';
import Tutorials from '../partner screen/Tutorials';
import SocialImage from '../partner screen/SocialImage';
import MainMenu from '../partner screen/MainMenu';
import Recruter from '../partner screen/Recruter';
import Reports from '../partner screen/Reports';
import Withdraw from '../partner screen/Withdraw';
// import ReferPartner from '../partner screen/ReferPartner';
import MyPartner from '../partner screen/MyPartner';
import ReferPartner from '../partner screen/ReferPartner';
import ReferCandidate from '../partner screen/ReferCandidate';
import TrackMyCandidate from '../partner screen/TrackMyCandidate';
import CustomerList from '../partner screen/CustomerList';
import MyCandidates from '../partner screen/MyCandidates';
import Referpartner1 from '../partner screen/Referpartner1';
import Refercandidate1 from '../partner screen/Refercandidate1.js';
import Mycandidate from '../partner screen/Mycandidate';
import Mycandidateshare from '../partner screen/Mycandidateshare';
import DrawerNavigator from './Tabs';
import Education from '../components/ProfileFillComponents/Education';
import Landing from '../partner screen/landing/Landing';
import AllJobsScreen from '../Screens/AllJobsScreen';
import {Provider} from 'react-redux';
import store from '../redux/reducers';
import PartnerAuthStack from './PartnerAuthStack';

// import Refercandidate1 from '../partner screen/ReferPartner';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AuthStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="PartnerAuthStack" component={PartnerAuthStack} />
      <Stack.Screen
        options={{headerShown: false}}
        name="Launch"
        component={LaunchScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Launch2"
        component={LaunchScreen2}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Menu-p"
        component={MainMenu}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Recruter-p"
        component={Recruter}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Referpartner1-p"
        component={Referpartner1}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Referpartner-p"
        component={ReferPartner}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Mypartner-p"
        component={MyPartner}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Refercandidate-p"
        component={ReferCandidate}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Refercandidate1-p"
        component={Refercandidate1}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Reports-p"
        component={Reports}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Trackcandidate-p"
        component={TrackMyCandidate}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Mycandidate-p"
        component={Mycandidate}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Mycandidateshare-p"
        component={Mycandidateshare}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Customer-p"
        component={CustomerList}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Mycandidates-p"
        component={MyCandidates}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Social-p"
        component={SocialImage}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="International"
        component={International}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Tutorials-p"
        component={Tutorials}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Jobs-p"
        component={Jobs}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Withdraw-p"
        component={Withdraw}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Landing"
        component={Landing}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="Talents"
        component={Talents}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="LoginCandidate"
        component={LoginCandidate}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="onboard"
        component={OnbardingScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ProfileUpdate1"
        component={ProfileUpdate1}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ProfileUpdate2"
        component={ProfileUpdate2}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ProfileUpdate3"
        component={ProfileUpdate3}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ProfileUpdate4"
        component={ProfileUpdate4}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ProfileUpdate5"
        component={ProfileUpdate5}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ProfileUpdate6"
        component={ProfileUpdate6}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ProfileUpdate7"
        component={ProfileUpdate7}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ProfileUpdate8"
        component={ProfileUpdate8}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ProfileUpdate9"
        component={ProfileUpdate9}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ProfileUpdate10"
        component={ProfileUpdate10}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ProfileUpdate11"
        component={ProfileUpdate11}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="AllJobsScreen"
        component={AllJobsScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="FilterScreen"
        component={FilterScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="JobDetails"
        component={JobDetails}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ResumeProfileToFill"
        component={ResumeProfileToFill}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Education"
        component={Education}
      />
    </Stack.Navigator>
  );
}

// const HomeNavigator = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <Stack.Screen name="Drawer" component={MyTabs} />
//     </Stack.Navigator>
//   );
// };

const CommonNavigator = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <StatusBar backgroundColor={Colors.Black} />
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen
              name="AuthStackNavigator"
              component={AuthStackNavigator}
            />
            <Stack.Screen name="HomeNavigator" component={MyTabs} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default CommonNavigator;

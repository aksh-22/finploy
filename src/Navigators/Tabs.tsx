import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ReferCandidate from '../Screens/BottomTabMainScreens/ReferCandidate';
import ReferPartner from '../Screens/BottomTabMainScreens/ReferPartner';
import MyProfile from '../Screens/BottomTabMainScreens/MyProfile';
import Chats from '../Screens/BottomTabMainScreens/Chats';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeIcon from '../Assets/Svg/HomeIcon.svg';
import ReferCandidateIcon from '../Assets/Svg/ReferCandidateIcon.svg';
import ReferPartnerIcon from '../Assets/Svg/ReferPartnerIcon.svg';
import MyJosbIcon from '../Assets/Svg/MyJobsIcon.svg';
import MyProfileIcon from '../Assets/Svg/MyProfileIcon.svg';
import ChatsIcon from '../Assets/Svg/Chats.svg';
import WithdrawFunds from '../Screens/WithdrawFunds';
import JobAlert from '../Screens/JobAlert';
import MyJobs from '../Screens/MyJobs';
import MessageCenter from '../Screens/MessageCenter';
import DocumentLibrary from '../Screens/DocumentLibrary';
import Trainings from '../Screens/Trainings';
import NotificationSetting from '../Screens/NotificationSetting';
import AccountSetting from '../Screens/AccountSetting';
import Privacy from '../Screens/Privacy';
import Home from '../Screens/BottomTabMainScreens/Home';
import MyOrders from '../Screens/MyOrders';
import PreferredIndustry from '../Screens/JobAlert/PreferredIndustry';
import CustomDrawerContent from './CustomDrawerContent';
import FilterScreen from '../Screens/FilterScreen';
import AllJobsScreen from '../Screens/AllJobsScreen';
import JobDetails from '../Screens/JobDetails';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="HomeScreen" component={MyTabs} />
      <Drawer.Screen name="AccountSetting" component={AccountSetting} />
      <Drawer.Screen name="WithdrawFunds" component={WithdrawFunds} />
      <Drawer.Screen name="JobAlert" component={JobAlert} />
      <Drawer.Screen name="MyJobs" component={MyJobs} />
      <Drawer.Screen name="MessageCenter" component={MessageCenter} />
      <Drawer.Screen name="DocumentLibrary" component={DocumentLibrary} />
      <Drawer.Screen name="Trainings" component={Trainings} />
      <Drawer.Screen name="Privacy" component={Privacy} />
      <Drawer.Screen name="PreferredIndustry" component={PreferredIndustry} />

      <Drawer.Screen
        name="NotificationSetting"
        component={NotificationSetting}
      />
    </Drawer.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{tabBarHideOnKeyboard: true}}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: () => <HomeIcon />,
        }}
      />

      <Tab.Screen
        name="ReferCandidate"
        component={FilterNavigator}
        options={{
          headerShown: false,
          tabBarIcon: () => <ReferCandidateIcon />,
        }}
      />
      <Tab.Screen
        name="ReferPartner"
        component={ReferPartner}
        options={{
          headerShown: false,
          tabBarIcon: () => <ReferPartnerIcon />,
        }}
      />
      <Tab.Screen
        name="Myjobs"
        component={MyJobs}
        options={{
          headerShown: false,
          tabBarIcon: () => <MyJosbIcon />,
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          headerShown: false,
          tabBarIcon: () => <MyProfileIcon />,
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          headerShown: false,
          tabBarIcon: () => <ChatsIcon />,
        }}
      />
    </Tab.Navigator>
  );
}

const FilterNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="ReferCandidate"
        component={ReferCandidate}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="FilterScreen"
        component={FilterScreen}
      />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        component={Home}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="FilterScreen"
        component={FilterScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="AllJobsScreen"
        component={AllJobsScreen}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="JobDetails"
        component={JobDetails}
      />
    </Stack.Navigator>
  );
};

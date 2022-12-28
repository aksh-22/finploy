import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {UserProfile} from '../Assets/Images';
import {getIcons, Icons} from '../Assets/Svg/Icons';
import {wp} from '../Theme/Dimensions';
import Colors from '../Theme/Colors';
import DrawerList from '../components/DrawerList';
import {colors} from 'react-native-elements';
import {useSelector} from 'react-redux';

export default function CustomDrawerContent(props?: any) {
  const userData = useSelector(state => state.persistedReducer.preference);
  // console.log(userData);

  const data = [
    {
      route: 'WithdrawFunds',
      icon: Icons.WALLET,
      title: 'Withdraw funds',
    },
    {
      route: 'MyOrders',
      icon: Icons.CHECKCIRCLE,
      title: 'My orders',
    },
    {
      route: 'JobAlert',
      icon: Icons.BELL,
      title: 'Job alert',
    },
    {
      route: 'MyJobs',
      icon: Icons.BRIEF,
      title: 'My jobs',
    },
    {
      route: 'MessageCenter',
      icon: Icons.MESSAGE,
      title: 'Message Center',
    },
    {
      route: 'DocumentLibrary',
      icon: Icons.FILEDRAWER,
      title: 'Document Library',
    },
    {
      route: 'Trainings',
      icon: Icons.FILEDRAWER,
      title: 'Trainings',
    },
    {
      route: 'NotificationSetting',
      icon: Icons.MAILDRAWER,
      title: 'Notification setting',
    },
    {
      route: 'AccountSetting',
      icon: Icons.SETTING,
      title: 'Account Setting',
    },
    {
      route: 'Privacy',
      icon: Icons.PRIVACY,
      title: 'Privacy',
    },
  ];
  const renderItem = (item: any) => (
    <DrawerList
      onPress={() => props.navigation.navigate(item.item.route)}
      Icon={item.item.icon}
      txt={item.item.title}
      underline
    />
  );
  return (
    <DrawerContentScrollView
      contentContainerStyle={{flex: 1, backgroundColor: Colors.bg}}>
      <View style={{flex: 1, backgroundColor: Colors.bg}}>
        <View style={styles.header}>
          <Image
            resizeMode="contain"
            style={styles.Image}
            // source={UserProfile}
            // source={{uri: 'https://pbs.twimg.com/media/Fkgprv-aEAU57ZR.jpg'}}
            source={{uri: userData?.profilePic}}
          />

          <View style={styles.centerTxt}>
            <Text style={styles.txt}>{userData?.name}</Text>
            <Text style={styles.txtEmail}>{userData?.email}</Text>
          </View>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            {getIcons(Icons.MENUDRAWER)}
          </TouchableOpacity>
        </View>

        <FlatList data={data} renderItem={renderItem} />
      </View>
      <DrawerList
        onPress={() => props.navigation.navigation('Auth')}
        rightArrow
        Icon={Icons.LOGOUT}
        txt="Sign Out"
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  Image: {
    height: wp(13),
    width: wp(13),
    borderRadius: wp(13),
    backgroundColor: '#E8EFF6',
  },
  centerTxt: {
    width: wp(45),
  },
  txt: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.green,
    lineHeight: 15.85,
  },
  txtEmail: {
    fontSize: 10,
    fontWeight: '600',
    color: Colors.Black,
    lineHeight: 12.19,
  },
});

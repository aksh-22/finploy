import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../Theme/Colors';
import HeaderBar from '../../components/Header';
import {CommonStyle, wp} from '../../Theme/Dimensions';
import {getIcons, Icons} from '../../Assets/Svg/Icons';
import {english} from '../../Theme/string';

export default function NotificationSetting(Props?: any) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  interface CProps {
    borderWidth?: any;
    title?: any;
  }

  const Render = (Props: CProps) => {
    const {borderWidth, title} = Props;
    return (
      <View style={[styles.list, {borderWidth: borderWidth ? 0.2 : 0}]}>
        <Text style={CommonStyle(12, 14.52, Colors.Black, '500')}>{title}</Text>
        <Switch
          trackColor={{false: '#767577', true: Colors.green}}
          thumbColor={isEnabled ? Colors.green : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    );
  };
  return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <HeaderBar {...Props} />
      <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
        {getIcons(Icons.BACK)}
        <Text
          style={[
            CommonStyle(16, 19.36, Colors.Blue, '500'),
            {marginHorizontal: 10},
          ]}>
          {english.UpdateNotificationSettings}
        </Text>
      </View>

      <View style={{marginTop: wp(10)}}>
        <Render title={'Matching Job Alerts'} borderWidth />
        <Render title={'Job Invites '} />
        <Render title={'Tips To Get More From Finploy '} />
        <Render title={'Newsletters & Updates '} />
        <Render title={'Erfectlty Matching Jobs Email '} borderWidth />
        <Render title={'Job Rejection Alerts '} borderWidth />
        <Render title={'Profile Shortlist Alerts '} borderWidth />
        <Render title={'Schedule Interview Alert '} borderWidth />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  list: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderColor: Colors.Grey,
  },
});

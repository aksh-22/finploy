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

export default function Privacy(Props?: any) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  interface CProps {
    borderWidth?: any;
    title?: any;
    subtitle?: any;
    bottom: any;
  }

  const Render = (Props: CProps) => {
    const {borderWidth, title, subtitle, bottom} = Props;
    return (
      <View style={[styles.list]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={CommonStyle(12, 14.52, Colors.greyLight, '500')}>
            {title}
          </Text>
          <Switch
            trackColor={{false: '#767577', true: Colors.green}}
            thumbColor={isEnabled ? Colors.green : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View>
          <Text style={CommonStyle(12, 14.52, Colors.Black, '400')}>
            {subtitle}
          </Text>
          <Text style={CommonStyle(12, 14.52, Colors.Black, '400')}>
            {bottom}
          </Text>
        </View>
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
          {english.ProfilePrivacySettings}
        </Text>
      </View>

      <View style={{marginTop: wp(10)}}>
        <Render
          title={'Searchable'}
          subtitle={
            'your profile is visible to recruiters actively searching on Finploy.To get more views make sure to complete the profile and keep it upto date'
          }
          borderWidth
        />
        <Render
          subtitle={
            'Your profile is visible to recruiters actively searching on Finploy but all your contact details are details. Please make sure that you remove these from your resume as well.'
          }
          title={'Searchable but anonymous'}
        />
        <Render
          subtitle={`Your profile is invisible to recruiters and you won’t recive any profile views.`}
          bottom={`Many oppertunies are never even advertised. Recruiters actively search the Finploy database and approach the more suitable professionals.`}
          title={'Non-Searchable'}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  list: {
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderColor: Colors.Grey,
    borderWidth: 0.2,
  },
});

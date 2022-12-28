import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import LeftIcon from '../Assets/Svg/LeftIcon.svg';
import LogoutIcon from '../Assets/Svg/LogoutIcon.svg';
import {hp, wp} from '../Theme/Dimensions';
import {colors} from '../Utils/colors';
import Colors from '../Theme/Colors';
export default function ProfileHeader() {
  return (
    <View
      style={{
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.lightGrey3,
        height: hp(9),
        alignItems: 'center',
      }}>
      <View
        style={{
          alignItems: 'center',
          margin: 10,
          flexDirection: 'row',
          width: wp(70),
        }}>
        <LeftIcon />
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            fontWeight: 'bold',
            marginLeft: wp(4),
          }}>
          {'My Candidate'}
        </Text>
      </View>

      <View style={{alignItems: 'center', margin: 10}}>
        <LogoutIcon style={{width: 24, height: 24}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

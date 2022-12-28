import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {getIcons, Icons} from '../Assets/Svg/Icons';
import Colors from '../Theme/Colors';
import {wp} from '../Theme/Dimensions';

interface CProps {
  txt?: string;
  Icon?: any;
  onPress?: any;
  rightArrow?: any;
  underline?: any;
}

export default function DrawerList(Props: CProps) {
  const {txt, Icon, onPress, rightArrow} = Props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={5}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 6,
        backgroundColor: Colors.bg,
        borderBottomWidth: 0.5,
        borderColor: Colors.Grey,
        marginHorizontal: 10,
      }}>
      {getIcons(Icon, wp(7), Colors.bg)}
      <Text
        style={{
          width: wp(45),
          color: Colors.Black,
          fontWeight: '600',
          lineHeight: 15.85,
        }}>
        {txt}
      </Text>
      {rightArrow ? (
        <View style={{width: wp(8)}}></View>
      ) : (
        getIcons(Icons.RIGHTARROW, wp(8), Colors.bg)
      )}
    </TouchableOpacity>
  );
}

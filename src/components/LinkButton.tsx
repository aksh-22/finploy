import {View, Text} from 'react-native';
import React from 'react';
import {getIcons, Icons} from '../Assets/Svg/Icons';
import {CommonStyle, wp} from '../Theme/Dimensions';
import Colors from '../Theme/Colors';

interface CProps {
  name?: any;
  title?: any;
}

export default function LinkButton(Props: CProps) {
  const {name, title} = Props;
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: Colors.bg,
        borderRadius: 5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: wp(20),
          paddingLeft: 10,
        }}>
        {getIcons(name, wp(9))}
      </View>
      <Text style={CommonStyle(16, 19.36, Colors.Black, '400')}>{title}</Text>
    </View>
  );
}

import {View, Text} from 'react-native';
import React from 'react';
import {getIcons, Icons} from '../Assets/Svg/Icons';
import {CommonStyle, wp} from '../Theme/Dimensions';
import Colors from '../Theme/Colors';

interface CProps {
  title?: any;
  subtitle?: any;
}

export default function SkillsList(Props: CProps) {
  const {title, subtitle} = Props;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
      }}>
      <View>
        <Text style={CommonStyle(12, 14.52, Colors.Black, '500')}>{title}</Text>
        <Text style={CommonStyle(12, 14.52, Colors.Grey, '500')}>
          {subtitle}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{marginHorizontal: 10}}>
          {getIcons(Icons.EDITB, wp(7), Colors.white)}
        </View>
        {getIcons(Icons.DELETE, wp(7), Colors.white)}
      </View>
    </View>
  );
}

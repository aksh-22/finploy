import {View, Text} from 'react-native';
import React from 'react';
import {getIcons, Icons} from '../../Assets/Svg/Icons';
import Colors from '../../Theme/Colors';
import {CommonStyle, wp} from '../../Theme/Dimensions';

export default function ChatHeader() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
      }}>
      {getIcons(Icons.BACKARROW, wp(5), Colors.white)}
      <View style={{justifyContent: 'space-between', width: wp(70)}}>
        <Text style={CommonStyle(13, 15.2, Colors.Black, '600')}>
          Deeesha Tech
        </Text>
        <Text style={CommonStyle(10, 12.1, Colors.Black, '400')}>
          UI/UX Design Internship
        </Text>
      </View>

      {getIcons(Icons.INFO1, wp(8), Colors.white)}
    </View>
  );
}

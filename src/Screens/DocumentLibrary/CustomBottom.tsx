import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../../Theme/Colors';
import {getIcons, Icons} from '../../Assets/Svg/Icons';
import {CommonStyle} from '../../Theme/Dimensions';
import {Touchable} from 'react-native';

interface CProps {
  label?: any;
  onPress?: any;
}

export default function CustomBottom(Props: CProps) {
  const {label, onPress} = Props;
  return (
    <TouchableOpacity
      activeOpacity={5}
      onPress={onPress}
      style={{
        backgroundColor: Colors.white,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 15,
        padding: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
      }}>
      <Text style={[styles.txt, {marginLeft: 10}]}>{label}</Text>
      {getIcons(Icons.EDIT)}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  txt: CommonStyle(16, 24, Colors.Black, '500'),
});

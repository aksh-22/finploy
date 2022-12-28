import {View, Text} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {wp} from '../Theme/Dimensions';
import Colors from '../Theme/Colors';

interface CProps {
  value?: any;
  setValue?: any;
  type?: any;
}
export default function checkbox(Props: CProps) {
  const {value, setValue, type} = Props;
  return (
    <View>
      <CheckBox
        disabled={false}
        value={value}
        style={{
          height: wp(5.5),
          width: wp(7),
        }}
        onChange={() => setValue(value === true ? false : true)}
        tintColor={Colors.Blue}
        onCheckColor={Colors.Blue}
        tintColors={{true: Colors.Blue, false: Colors.Blue}}
        boxType="circle"
        onAnimationType="fade"
        offAnimationType="fade"
      />
    </View>
  );
}

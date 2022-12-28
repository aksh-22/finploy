/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/require-default-props */
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {CommonStyle, wp} from '../Theme/Dimensions';
import Colors from '../Theme/Colors';
// import Add from "react-native-vector-icons/AntDesign";

interface CProps {
  label?: any;
  onPress?: any;
  placeholder?: any;
  editable?: any;
}

export default function Custom(Props: CProps) {
  const {label, onPress, placeholder, editable} = Props;
  return (
    <View style={{marginVertical: 10}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={CommonStyle(14, 16.94, Colors.Blue, '500')}>{label}</Text>
        <Text
          style={[
            CommonStyle(20, 20.94, Colors.red, '500'),
            {marginHorizontal: 2},
          ]}>
          *
        </Text>
      </View>
      <TouchableOpacity activeOpacity={5} onPress={onPress}>
        <TextInput
          placeholder={placeholder}
          editable={editable}
          style={{
            height: 40,
            fontSize: 16,
            color: '#000',
            borderWidth: 0.5,
            borderBottomColor: Colors.Grey,
            borderRadius: 5,
            paddingHorizontal: 10,
          }}
          blurOnSubmit
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  AddInput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(100),
    borderTopWidth: wp(0.4),
    borderBottomWidth: wp(0.4),
    backgroundColor: Colors.white,
    padding: wp(4),
    justifyContent: 'space-between',
  },
});

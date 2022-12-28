import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../Theme/Colors';

interface CProps {
  text?: any;
  style?: any;
  tStyle?: any;
  onPress?: any;
  disable?: boolean;
}
export default function GreenBtn(Props: CProps) {
  const {text, style, tStyle, onPress, disable} = Props;

  return disable ? (
    <TouchableOpacity
      activeOpacity={5}
      style={[styles.container, style, {backgroundColor: 'grey'}]}>
      <Text style={[styles.btnText, tStyle]}>{text}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      activeOpacity={5}
      onPress={onPress}
      style={[styles.container, style]}>
      <Text style={[styles.btnText, tStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: Colors.border,
    padding: 10,
    alignItems: 'center',
  },
  btnText: {
    color: '#0C0C0C',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

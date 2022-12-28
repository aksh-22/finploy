import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

interface CProps {
  text?: any;
  Color?: any;
}
export default function GreenBtn(Props: CProps) {
  const {text, Color} = Props;
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: Color ? Color : '#4EA647'}]}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  btnText: {
    color: '#F3F3F3',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

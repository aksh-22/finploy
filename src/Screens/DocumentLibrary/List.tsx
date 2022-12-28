import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../Theme/Colors';
import {CommonStyle, wp} from '../../Theme/Dimensions';

interface CProps {
  name?: any;
  present?: any;
}

export default function List(Props: CProps) {
  const {name, present} = Props;
  return (
    <View style={styles.body}>
      <Text style={CommonStyle(14, 21, Colors.Black, '500')}>{name}</Text>
      <View style={styles.row}>
        <Text style={CommonStyle(14, 21, Colors.green, '500')}>Add</Text>
        <Text style={[styles.Pressing, {marginLeft: 5}]}>{present} %</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Progress: {
    flexDirection: 'row',
  },
  ProgressBar: {
    width: wp(75),
    borderRadius: 10,
    backgroundColor: Colors.Grey,
    height: 5,
  },
  CompleteProgress: {
    width: wp(20),
    height: 5,
    borderRadius: 10,
    backgroundColor: Colors.red,
  },
  Pressing: CommonStyle(14, 21, Colors.green, '500'),
  ProgressBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
  },
});

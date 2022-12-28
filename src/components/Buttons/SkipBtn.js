import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../Theme/Colors';
import {english} from '../../Theme/string';

export default function SkipBtn({screen}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={5}
      onPress={() => {
        navigation.navigate(screen);
      }}
      style={[styles.btnContainer]}>
      <Text style={styles.btnText}>{english.Skip}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.lightGrey3,
    borderRadius: 5,
    margin: 20,
  },
  btnText: {
    fontSize: 14,
    color: 'black',
  },
});

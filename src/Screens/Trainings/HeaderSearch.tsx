import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CommonStyle, wp} from '../../Theme/Dimensions';
import Colors from '../../Theme/Colors';

export default function HeaderSearch() {
  return (
    <View
      style={{backgroundColor: '#F5F5F5', padding: 10, paddingLeft: wp(10)}}>
      <Text style={CommonStyle(16, 19.36, Colors.Black, '500')}>
        Search Trtainings
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});

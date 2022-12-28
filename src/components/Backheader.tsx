import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {getIcons, Icons} from '../Assets/Svg/Icons';
import {CommonStyle, wp} from '../Theme/Dimensions';
import {useNavigation} from '@react-navigation/native';
import Colors from '../Theme/Colors';

interface CProps {
  middle?: any;
  lastTxt?: any;
}

export default function BackHeaderBar(Props: CProps) {
  const {middle, lastTxt} = Props;
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          width: wp(50),
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        onPress={() => navigation.goBack()}>
        {getIcons(Icons.BACK, wp(6))}
        {middle && (
          <Text style={CommonStyle(15, 18.15, Colors.Black, '600')}>
            {middle}
          </Text>
        )}
      </TouchableOpacity>
      {lastTxt && (
        <Text style={CommonStyle(15, 18.15, Colors.green, '600')}>
          {lastTxt}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
});

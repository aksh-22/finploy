import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {wp} from '../../Theme/Dimensions';
import Colors from '../../Theme/Colors';
import Fonts from '../../Theme/Fonts';

export default function IconCard({uri, text, selected}) {
  return (
    <View
      style={[styles.cardContainer, selected && {backgroundColor: '#E8EFF6'}]}>
      <Image source={uri} style={{width: wp(9), height: wp(9)}} />
      <Text style={[Fonts.textSmallBlack, {marginLeft: wp(2)}]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    height: 74,
    width: 152,
    borderRadius: 5,
    elevation: 10,
    shadowColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: wp(2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  textStyle: {
    fontSize: 16,
    color: 'black',
    marginHorizontal: 10,
  },
});

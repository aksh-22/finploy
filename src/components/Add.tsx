import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getIcons, Icons} from '../Assets/Svg/Icons';
import {wp, CommonStyle} from '../Theme/Dimensions';
import Colors from '../Theme/Colors';
import {Copy, Share2} from '../Assets/Images';
import {english} from '../Theme/string';
import GreenBtn from './Buttons/BasicBtn';

export default function Add({Button}) {
  return (
    <View
      style={[{flexDirection: 'column', backgroundColor: Colors.lightGreen3}]}>
      <View style={styles.AddLast}>
        <View style={styles.AddPart}>
          {getIcons(Icons.COMMERCIAL, wp(11))}
          <View style={{marginBottom: 10}}>{getIcons(Icons.MONEY, wp(9))}</View>
        </View>

        <View>
          <Text style={CommonStyle(16, 24, Colors.Black, '500')}>
            {english.ReferEarn}
          </Text>
          <Text style={CommonStyle(24, 24, Colors.green, '700')}>
            {english.Money}
          </Text>
        </View>
        <View style={styles.AddPart2}>
          <Image
            source={Share2}
            resizeMode="contain"
            style={{marginHorizontal: 10}}
          />
          <Image source={Copy} />
        </View>
      </View>
      {Button && (
        <GreenBtn
          tStyle={styles.buttonTxt}
          style={styles.button}
          text={'Join as partner'}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Input2: {
    borderBottomColor: Colors.Black,
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: Colors.Grey,
  },
  txtStyle: {
    marginLeft: 20,
    top: 10,
  },
  buttonRed: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    paddingVertical: 14,
    borderRadius: 0,
    width: wp(90),
    borderColor: Colors.red,
    marginVertical: 10,
  },
  AddLast: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: Colors.lightGreen3,
  },
  AddPart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  AddPart2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonTxt: {
    color: Colors.white,
  },
  button: {
    backgroundColor: Colors.green,
    paddingVertical: 10,
    borderWidth: 0,
    marginBottom: 5,
    marginHorizontal: 5,
  },
});

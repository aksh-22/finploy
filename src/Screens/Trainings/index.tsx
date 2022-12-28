import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import React from 'react';
import Colors from '../../Theme/Colors';
import HeaderBar from '../../components/Header';
import HeaderSearch from './HeaderSearch';
import SearchInput from './SearchInput';
import GreenBtn from '../../components/Buttons/BasicBtn';
import {CommonStyle, wp} from '../../Theme/Dimensions';
import {getIcons, Icons} from '../../Assets/Svg/Icons';
import {english} from '../../Theme/string';

export default function Trainings(Props?: any) {
  const render = () => {
    return (
      <View style={styles.ListComponent}>
        <Text style={[styles.ListCommon, styles.customTxt]}>
          Digital Marketing
        </Text>
        <Text style={[styles.ListCommon, styles.customTxt, {fontSize: 12}]}>
          Learn SEO, Search Engine Marketing, Analytics and more
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{marginHorizontal: 4}}>{getIcons(Icons.BRIEFCASE)}</View>
          <Text style={[styles.ListCommon, styles.customTxt]}>Duration:</Text>
          <Text style={[styles.ListCommon, styles.customTxt]}>6 weeks</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{marginHorizontal: 4}}>{getIcons(Icons.BLUERUPEE)}</View>
          <Text style={[styles.ListCommon, styles.customTxt]}>Price:</Text>
          <Text style={[styles.ListCommon, styles.customTxt]}>6999/-</Text>
          <Text style={[styles.ListCommon, styles.customTxt]}>2300/-</Text>
          <Text
            style={[
              styles.ListCommon,
              styles.customTxt,
              {color: Colors.red, fontSize: 10},
            ]}>
            Limited Time Offer
          </Text>
        </View>
        <View>
          <View style={styles.buttonView}>
            <GreenBtn
              style={[styles.button, {backgroundColor: Colors.greyDark}]}
              tStyle={styles.bTxt2}
              text="Know More"
            />
            <GreenBtn style={styles.button} tStyle={styles.bTxt} text="Apply" />
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <HeaderBar {...Props} />
      <ScrollView>
        <HeaderSearch />
        <SearchInput />
        <View style={{alignItems: 'center'}}>
          <GreenBtn style={styles.button} tStyle={styles.bTxt} text="Search" />
        </View>
        <FlatList data={[1, 3, 3, 4, 4, 4]} renderItem={render} />
        <View style={styles.bottomBody}>
          <Text style={CommonStyle(16, 19.36, Colors.Black, '500')}>
            {english.ReferEarn}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginHorizontal: 5}}>
              {getIcons(Icons.GROPCOPY, wp(15))}
            </View>

            {getIcons(Icons.GROUPSHAIR, wp(15))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.lightGreen,
    borderWidth: 0,
    paddingHorizontal: wp(8),
    borderRadius: 3,
  },
  bTxt: CommonStyle(16, 19.36, Colors.Black, '400'),
  bTxt2: [CommonStyle(16, 19.36, Colors.Blue, '400')],
  customTxt: {
    paddingVertical: 7,
    paddingHorizontal: 5,
  },
  ListComponent: {
    borderBottomWidth: 2,
    marginHorizontal: 15,
    paddingVertical: 10,
    borderColor: Colors.greyDark,
    marginTop: 10,
  },
  ListCommon: [CommonStyle(16, 19.36, Colors.Black, '400')],
  buttonView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  bottomBody: {
    borderWidth: 1,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: Colors.Grey,
    marginTop: 10,
    alignItems: 'center',
    marginBottom: wp(10),
  },
});

import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
// import HeaderBar from '../../components/Header';
import Colors from '../../Theme/Colors';
import {getIcons, Icons} from '../../Assets/Svg/Icons';
import {wp, hp} from '../../Theme/Dimensions';
import CheckBox from './../../components/checkbox';
import GreenBtn from '../../components/Buttons/BasicBtn';
import Model from '../../components/Model';
import {english} from '../../Theme/string';
import HeaderBar from '../../components/Header';

export default function WithdrawFunds(Props?: any) {
  const [isSelected, setSelection] = useState(false);
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <HeaderBar {...Props} />
      <ScrollView>
        <Text style={styles.txt}>{english.WithdrawFunds}</Text>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.txtBalance}>{english.Balance}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {getIcons(Icons.BLUERUPEE, wp(7))}
            <Text style={styles.txtRupee}>50000</Text>
          </View>
        </View>

        <View style={styles.ListView}>
          <View style={styles.ListComponent}>
            <View style={styles.margin}>
              <CheckBox value={isSelected} setValue={setSelection} />
            </View>
            <Text style={[styles.width, {paddingVertical: hp(2.5)}]}>
              {english.part1}
            </Text>
          </View>
          <View style={styles.ListComponent}>
            <View style={styles.margin}>
              <CheckBox value={isSelected1} setValue={setSelection1} />
            </View>
            <View style={{paddingVertical: hp(2.5)}}>
              <Text>{english.Paypal}</Text>
              <Text style={styles.width}>{english.part2}</Text>
            </View>
          </View>
          <View style={styles.ListComponent}>
            <View style={styles.margin}>
              <CheckBox value={isSelected2} setValue={setSelection2} />
            </View>
            <View style={{paddingVertical: hp(2.5)}}>
              <Text style={[styles.width]}>{english.part3sub}</Text>
              <Text style={styles.width}>{english.part3sub2}</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            alignItems: 'flex-end',
            paddingHorizontal: wp(5),
          }}>
          <Text style={styles.AddTxt}>{english.AddAccount}</Text>
          <GreenBtn
            tStyle={styles.buttonTxt}
            style={styles.button}
            text={'Continue'}
            onPress={() => setModalVisible(true)}
          />
        </View>
      </ScrollView>
      <Model
        modalVisible={modalVisible}
        ClosePress={() => setModalVisible(false)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  txt: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: hp(3),
    color: Colors.Blue,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  txtBalance: {
    fontSize: 20,
    fontWeight: '400',
    lineHeight: hp(3),
    color: Colors.Black,
    marginTop: 10,
  },
  txtRupee: {
    fontSize: 36,
    fontWeight: '700',
    lineHeight: hp(5.35),
    color: Colors.Black,
    marginLeft: wp(1),
  },
  checkbox: {
    alignSelf: 'center',
    margin: 5,
    borderRadius: 5,
    height: hp(0.6),
    width: wp(1.2),
  },
  ListView: {
    alignItems: 'center',
    backgroundColor: Colors.grey,
    marginHorizontal: wp(5),
    marginVertical: hp(2.5),
  },
  ListComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.3,
    borderColor: Colors.borderColor,
  },
  margin: {
    marginHorizontal: wp(5),
  },
  width: {
    width: wp(70),
  },
  button: {
    backgroundColor: Colors.Blue,
    borderWidth: 0,
    paddingVertical: hp(1.2),
  },
  buttonTxt: {
    color: Colors.white,
  },
  AddTxt: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: hp(2.25),
    color: Colors.Blue,
    marginVertical: hp(1.2),
  },
});

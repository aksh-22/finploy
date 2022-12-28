import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import HeaderBar from '../../components/Header';
import Colors from '../../Theme/Colors';
import {getIcons, Icons} from '../../Assets/Svg/Icons';
import {wp} from '../../Theme/Dimensions';
import CheckBox from './../../components/checkbox';
import GreenBtn from '../../components/Buttons/BasicBtn';
import Model from '../../components/Model';
import BackHeaderBar from '../../components/Backheader';
import ModelMyOrders from '../../components/ModelMyOrders';

export default function MyOrders(Props?: any) {
  const [isSelected, setSelection] = useState(false);
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <BackHeaderBar {...Props} />
      <ScrollView>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.txtBalance}>Upgrade your plan to </Text>
          <Text style={styles.txt}>Career Plus</Text>
        </View>

        <View style={styles.ListView}>
          <Text style={[styles.TxtHeader]}>Perks</Text>
          <Text style={styles.ListTxt}>Lorem ipsum dolor sit amet,</Text>
          <Text style={styles.ListTxt}>consectetur adipiscing elit.</Text>
          <Text style={styles.ListTxt}>Lacus maecenas at eget purus</Text>
          <Text style={styles.ListTxt}>elementum, enim amet sed eget.</Text>
          <Text style={styles.ListTxt}>Dui tristique at facilisis eu sit.</Text>
        </View>

        <View style={styles.waiting}>
          <Text style={styles.AddTxt}>Why waiting?</Text>
          <GreenBtn
            tStyle={styles.buttonTxt}
            style={styles.button}
            text={'Upgrade'}
            onPress={() => setModalVisible(true)}
          />
        </View>
      </ScrollView>

      <ModelMyOrders
        modalVisible={modalVisible}
        ClosePress={() => setModalVisible(false)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  txt: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 29.05,
    color: Colors.Blue,
    paddingVertical: 20,
  },
  txtBalance: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19.36,
    color: Colors.Black,
    paddingLeft: 20,
  },
  txtRupee: {
    fontSize: 36,
    fontWeight: '700',
    lineHeight: 43.57,
    color: Colors.Black,
    marginLeft: wp(1),
  },
  ListTxt: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 40,
    color: Colors.Black,
    paddingLeft: 20,
  },
  ListView: {
    backgroundColor: Colors.grey,
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 10,
    borderRadius: 10,
  },

  margin: {
    marginHorizontal: 20,
  },
  width: {
    width: wp(70),
  },
  button: {
    backgroundColor: Colors.Blue,
    borderWidth: 0,
    paddingVertical: 10,
    width: wp(40),
  },
  buttonTxt: {
    color: Colors.white,
  },
  TxtHeader: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19.36,
    color: Colors.Blue,
    paddingLeft: 20,
  },
  AddTxt: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19.36,
    color: Colors.Black,
  },
  waiting: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

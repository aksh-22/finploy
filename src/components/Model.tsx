import React, {Children, useState} from 'react';
import {Alert, Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import {color} from 'react-native-reanimated';
import Colors from '../Theme/Colors';
import {wp} from '../Theme/Dimensions';
import GreenBtn from './Buttons/BasicBtn';
import CheckBox from './../components/checkbox';

interface CProps {
  modalVisible?: Boolean;
  setModalVisible?: any;
  ClosePress?: any;
}

export default function Model(Props: CProps) {
  const {modalVisible, setModalVisible, ClosePress} = Props;
  const [value, setValue] = useState('');

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.withdraw}>Withdraw</Text>

            <View>
              <Text style={styles.subtitle}>Enter WithDraw Amount </Text>
              <View>
                <TextInput
                  value={value}
                  onChangeText={setValue}
                  placeholder={'Rs. 1000'}
                  style={styles.input}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.txt, {fontWeight: '400'}]}>To</Text>
                <Text style={[styles.txt, styles.PayTxt]}>PayPal</Text>
                <Text style={[styles.txt, {fontWeight: '400'}]}>Account</Text>
                <View style={styles.change}>
                  <Text style={[styles.txt, {fontWeight: '400'}]}>Change</Text>
                </View>
              </View>
              <GreenBtn
                onPress={ClosePress}
                tStyle={styles.buttonTxt}
                style={styles.button}
                text={'Withdraw'}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 9,
    padding: 10,
    elevation: 2,
    backgroundColor: Colors.Blue,
    borderWidth: 0,
    width: wp(60),
    marginTop: 20,
    paddingVertical: 15,
  },
  buttonTxt: {
    color: Colors.white,
  },
  AddTxt: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 18.15,
    color: Colors.Blue,
    marginVertical: 10,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  withdraw: {
    color: Colors.Black,
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 30,
  },
  input: {
    borderBottomWidth: 1,
    width: wp(60),
    marginVertical: 20,
  },
  subtitle: {
    color: Colors.Blue,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14.52,
  },
  txt: {
    fontSize: 16,
    color: Colors.Black,
    lineHeight: 19.36,
    fontWeight: '600',
  },
  PayTxt: {
    color: Colors.Blue,
    marginHorizontal: 4,
  },
  change: {
    alignItems: 'flex-end',
    width: wp(23),
  },
});

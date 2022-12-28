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

export default function ModelMyOrders(Props: CProps) {
  const {modalVisible, setModalVisible, ClosePress} = Props;
  const [value, setValue] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [isSelected2, setSelection2] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.withdraw}>
              You can pay for a month or a week
            </Text>

            <View>
              <View style={styles.component}>
                <View style={styles.row}>
                  <CheckBox value={isSelected} setValue={setSelection} />
                  <Text style={styles.textStyle}>Weekly</Text>
                </View>
                <View style={styles.row}>
                  <CheckBox value={isSelected2} setValue={setSelection2} />
                  <Text style={styles.textStyle}>Monthly</Text>
                </View>
              </View>

              <View style={styles.body}>
                <Text style={[styles.txt, {fontWeight: '400'}]}>Rs.</Text>
                <Text style={[styles.txt, {fontWeight: '400'}]}>1000/</Text>
                <Text style={[styles.txt, styles.PayTxt]}>Per week</Text>
              </View>
              <View style={styles.buttonVIew}>
                <GreenBtn
                  onPress={ClosePress}
                  tStyle={styles.buttonTxt}
                  style={styles.button}
                  text={'Upgrade'}
                />
              </View>

              <View>
                <Text style={styles.bottomTxt}>
                  By placing this order you are agreeing to Finploys’ Terms of
                  service and privacy policy
                </Text>
              </View>
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
    paddingHorizontal: 20,
    paddingVertical: 20,
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
    color: Colors.Black,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19.36,
    marginHorizontal: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  withdraw: {
    color: Colors.Black,
    fontWeight: '400',
    fontSize: 20,
    marginBottom: 30,
    lineHeight: 24.2,
    textAlign: 'center',
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
  row: {
    flexDirection: 'row',
  },
  component: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonVIew: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  bottomTxt: {
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 17.81,
    fontSize: 13,
    color: Colors.Black,
  },
});

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {CommonStyle, wp} from '../../Theme/Dimensions';
import Colors from '../../Theme/Colors';
import {getIcons, Icons} from '../../Assets/Svg/Icons';
import Input from '../../components/Input';
import CheckBox from './../../components/checkbox';
import {english} from '../../Theme/string';
import GreenBtn from '../../components/Buttons/BasicBtn';

interface CProps {
  cancel?: any;
}
export default function ProfileEdit(Props: CProps) {
  const {cancel} = Props;
  const [isSelected, setSelection] = useState(false);
  return (
    <View>
      <View style={styles.component}>
        <Text style={[styles.txt]}>About You</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {getIcons(Icons.EDITB, wp(6), Colors.white)}
          {getIcons(Icons.DELETE, wp(7))}
        </View>
      </View>

      <Input
        title={'Summary'}
        placeholder="Professional Banker"
        width={wp(75)}
        style={styles.Input}
        txtStyle={styles.txtStyle}
        placeholderTextColor={Colors.Black}
      />
      <Input
        title={'Total Work Experience'}
        placeholder="5-7 yrs"
        width={wp(75)}
        style={styles.Input}
        txtStyle={styles.txtStyle}
        placeholderTextColor={Colors.Black}
      />
      <View style={styles.Add}>
        {getIcons(Icons.ADD, wp(4))}
        <Text style={CommonStyle(14, 21, Colors.Blue, '500')}>
          {english.AddEducation}
        </Text>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity activeOpacity={5} onPress={cancel}>
          <Text
            style={[
              CommonStyle(14, 21, Colors.Grey, '500'),
              {textDecorationLine: 'underline', marginHorizontal: 10},
            ]}>
            Cancel
          </Text>
        </TouchableOpacity>

        <GreenBtn
          tStyle={styles.buttonTxt}
          style={styles.button}
          text={'Save changes'}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  txt: CommonStyle(16, 24, Colors.Black, '500'),
  component: {
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 15,
    borderRadius: 8,
    marginLeft: 20,
  },
  buttonTxt: {
    color: Colors.white,
  },
  button: {
    backgroundColor: Colors.Blue,
    borderWidth: 0,
    paddingVertical: 10,
  },
  width: {
    width: wp(40),
  },
  Add: {
    flexDirection: 'row',
    width: wp(33),
    marginHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottom: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  Input: {
    borderBottomWidth: 1,
    borderWidth: 0,
    padding: 0,
    paddingVertical: 0,
    borderBottomColor: Colors.Black,
  },
  txtStyle: {
    marginLeft: 20,
    top: 10,
  },
});

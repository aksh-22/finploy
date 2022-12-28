import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {CommonStyle, wp} from '../../Theme/Dimensions';
import Colors from '../../Theme/Colors';
import {getIcons, Icons} from '../../Assets/Svg/Icons';
import Input from '../../components/Input';
import CheckBox from '../../components/checkbox';
import {english} from '../../Theme/string';
import GreenBtn from '../../components/Buttons/BasicBtn';

interface CProps {
  cancel?: any;
}

export default function AboutIdealJob(Props: CProps) {
  const {cancel} = Props;

  const [isSelected, setSelection] = useState(false);
  return (
    <View>
      <View style={styles.component}>
        <Text style={[styles.txt]}>Ideal Job</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {getIcons(Icons.EDITB, wp(6), Colors.white)}
          {getIcons(Icons.DELETE, wp(7))}
        </View>
      </View>
      <View>
        <Input title={'Desired job title'} placeholder="VD" />
        <Input placeholder="50,000" title={'Desired salary'} />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={styles.width}>
            <Input
              placeholder="US Dollar(USD)"
              keyboardType={'number-pad'}
              width={wp(30)}
              DropDown
            />
          </View>
          <View style={styles.width}>
            <Input
              placeholder="Per month"
              width={wp(30)}
              keyboardType={'number-pad'}
              DropDown
            />
          </View>
        </View>
        <Input placeholder="Permanent" title={'Position type'} DropDown />
        <Input placeholder="No" title={'Willing to travel'} DropDown />
        <Input placeholder="No" title={'Willing to relocate'} DropDown />
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
  },
  buttonTxt: {
    color: Colors.white,
  },
  button: {
    backgroundColor: Colors.Blue,
    borderWidth: 0,
    paddingVertical: 10,
  },
  width: {},
  Add: {
    flexDirection: 'row',
    width: wp(43),
    marginHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

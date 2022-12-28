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

export default function AboutEducation(Props: CProps) {
  const [isSelected, setSelection] = useState(false);
  const {cancel} = Props;
  return (
    <View>
      <View style={styles.component}>
        <Text style={[styles.txt]}>Education</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {getIcons(Icons.EDITB, wp(6), Colors.white)}
          {getIcons(Icons.DELETE, wp(7))}
        </View>
      </View>
      <View>
        <Input
          title={'Education Level'}
          placeholder="Postgraduate degree - Masters"
          width={wp(75)}
          DropDown
        />
        <Input placeholder="CA" title={'Feild of study'} />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={styles.width}>
            <Input
              title={'Start year'}
              placeholder="2020"
              keyboardType={'number-pad'}
            />
          </View>
          <View style={styles.width}>
            <Input
              title={'Graduation year'}
              placeholder="2024"
              keyboardType={'number-pad'}
            />
          </View>
        </View>
      </View>

      <View style={{flexDirection: 'row'}}>
        <View style={{marginRight: 10}}>
          <CheckBox value={isSelected} setValue={setSelection} />
        </View>

        <Text style={CommonStyle(12, 18, Colors.txtLight, '500')}>
          {english.recentlyGraduated}
        </Text>
      </View>
      <Input
        title={'Educational Establishment'}
        placeholder=""
        width={wp(75)}
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
    marginVertical: 15,
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
});

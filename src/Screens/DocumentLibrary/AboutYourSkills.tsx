import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {CommonStyle, wp} from '../../Theme/Dimensions';
import Colors from '../../Theme/Colors';
import {getIcons, Icons} from '../../Assets/Svg/Icons';
import Input from '../../components/Input';
import CheckBox from './../../components/checkbox';
import {english} from '../../Theme/string';
import GreenBtn from '../../components/Buttons/BasicBtn';
import SkillsList from '../../components/SkillsList';

interface CProps {
  cancel?: any;
}
export default function AboutYourSkills(Props: CProps) {
  const [isSelected, setSelection] = useState(false);
  const {cancel} = Props;

  return (
    <View>
      <Text style={[CommonStyle(16, 24, Colors.Black, '500'), {marginTop: 30}]}>
        {english.Skills}
      </Text>

      <View>
        <SkillsList title={'Canva'} subtitle="Intermediate" />
        <SkillsList title={'UI & UX Design'} subtitle="Intermediate" />
        <SkillsList title={'Adobe Illustrator'} subtitle="Beginner" />
        <SkillsList title={'Figma'} subtitle="Intermediate" />
        <SkillsList title={'Adobe XD'} subtitle="Advanced" />
        <SkillsList title={'G-Suite'} subtitle="Intermediate" />
      </View>

      <View style={styles.Add}>
        <View style={{marginRight: 10}}>{getIcons(Icons.ADD, wp(4))}</View>
        <Text style={CommonStyle(14, 21, Colors.Blue, '500')}>
          {english.AddSkills}
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
    marginHorizontal: 10,
    alignItems: 'center',
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

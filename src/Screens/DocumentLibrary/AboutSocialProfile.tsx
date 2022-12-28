import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
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
export default function AboutSocialProfile(Props: CProps) {
  const {cancel} = Props;
  const [isSelected, setSelection] = useState(false);

  const socialProfileData = [
    {
      id: 1,
      placeHolder: 'Enter LinkedIn profile URL',
      icon: Icons.TWITTER,
    },
    {
      id: 2,
      placeHolder: 'Enter Facebook profile URL',
      icon: Icons.INSTAGRAM,
    },
    {
      id: 3,
      placeHolder: 'Enter Twitter profile URL',
      icon: Icons.BAHLANCE,
    },
    {
      id: 4,
      placeHolder: 'Enter stackoverflow profile URL',
      icon: Icons.LINKDIN,
    },
    {
      id: 5,
      placeHolder: 'Enter Redit profile URL',
      icon: Icons.GITHUB,
    },
    {
      id: 6,
      placeHolder: 'Enter Github profile URL',
      icon: Icons.OUORA,
    },
    {
      id: 7,
      placeHolder: 'Enter Social profile URL',
      icon: Icons.STACK,
    },
  ];
  return (
    <View>
      <View style={styles.component}>
        <Text style={[styles.txt]}>Social</Text>
      </View>

      <FlatList
        scrollEnabled={false}
        data={socialProfileData}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>{getIcons(item.icon, wp(10))}</View>
              <Input placeholder="Enter Twitter URL" width={wp(60)} />
              <View>{getIcons(Icons.DELETEGREY, wp(8))}</View>
            </View>
          );
        }}
      />
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

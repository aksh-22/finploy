import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {CommonStyle, wp} from '../../Theme/Dimensions';
import Colors from '../../Theme/Colors';
import {getIcons, Icons} from '../../Assets/Svg/Icons';
import Input from '../../components/Input';
import CheckBox from './../../components/checkbox';
import {english} from '../../Theme/string';
import GreenBtn from '../../components/Buttons/BasicBtn';
import HeaderBar from '../../components/Header';
import Add from '../../components/Add';

interface CProps {
  cancel?: any;
}
export default function AboutSocialProfile(Props: CProps) {
  const {cancel} = Props;
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <HeaderBar {...Props} />
      <ScrollView>
        <View style={{paddingHorizontal: 13}}>
          <View style={styles.component}>
            <Text style={[styles.txt]}>About You</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {getIcons(Icons.DOWNARROW, wp(10), Colors.white)}
            </View>
          </View>

          <Input
            placeholder="Change Password "
            width={wp(75)}
            style={styles.Input}
            txtStyle={styles.txtStyle}
            placeholderTextColor={Colors.Black}
          />
          <Input
            placeholder="Enter Old Password"
            width={wp(75)}
            style={styles.Input2}
            txtStyle={styles.txtStyle}
            placeholderTextColor={Colors.Black}
          />
          <Input
            placeholder="Enter New Password"
            width={wp(75)}
            style={styles.Input2}
            txtStyle={styles.txtStyle}
            placeholderTextColor={Colors.Black}
          />
          <Input
            placeholder="Re-enter New Password"
            width={wp(75)}
            style={styles.Input2}
            txtStyle={styles.txtStyle}
            placeholderTextColor={Colors.Black}
          />
          <View style={styles.bottom}>
            <GreenBtn
              tStyle={styles.buttonTxt}
              style={styles.button}
              text={'Save new password'}
            />
          </View>

          <Input
            placeholder="Account Activity "
            width={wp(75)}
            style={styles.Input}
            txtStyle={styles.txtStyle}
            placeholderTextColor={Colors.Black}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text style={CommonStyle(14, 21, Colors.Black, '500')}>
              Default currency
            </Text>

            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                borderRadius: 6,
                paddingHorizontal: 10,
                paddingVertical: 3,
              }}>
              <Text>INR </Text>
              {getIcons(Icons.RUPEE, wp(5))}
              {getIcons(Icons.DOWNARROW)}
            </View>
          </View>

          <View style={{marginVertical: 10}}>
            <Text style={CommonStyle(14, 21, Colors.Black, '500')}>
              {english.Deactivating}
            </Text>
          </View>

          <View style={styles.bottom}>
            <GreenBtn
              tStyle={[styles.buttonTxt, {color: Colors.red}]}
              style={styles.buttonRed}
              text={'Deactivate My Account'}
            />
            <GreenBtn
              tStyle={[
                styles.buttonTxt,
                {color: Colors.red, textDecorationLine: 'underline'},
              ]}
              style={[
                styles.buttonRed,
                {borderWidth: 0, backgroundColor: Colors.greyButton},
              ]}
              text={'Delete My Account'}
            />
          </View>

          <Add />
        </View>
      </ScrollView>
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
    paddingVertical: 14,
    width: wp(90),
    borderRadius: 0,
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
  Input2: {
    borderBottomColor: Colors.Black,
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: Colors.Grey,
  },
  txtStyle: {
    marginLeft: 20,
    top: 10,
  },
  buttonRed: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    paddingVertical: 14,
    borderRadius: 0,
    width: wp(90),
    borderColor: Colors.red,
    marginVertical: 10,
  },
  AddLast: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: Colors.lightGreen3,
  },
  AddPart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  AddPart2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

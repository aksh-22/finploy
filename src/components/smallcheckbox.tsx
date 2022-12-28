import {View, Text} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {wp} from '../Theme/Dimensions';
import Colors from '../Theme/Colors';

interface CProps {
  value?: any;
  setValue?: any;
  type?: any;
}
export default function checkbox(Props: CProps) {  
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const {value, setValue, type} = Props;
  return (
    <View>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        style={{
          height:  2,
          width: wp(7),
        }}
        // onChange={() => (value === true ? false : true)}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
        onFillColor ={'red'}
        tintColor={'white'}
        onCheckColor={Colors.Blue}
        tintColors={{true: Colors.green, false: Colors.greyDark}}
        boxType="circle"
        onAnimationType="fade"
        offAnimationType="fade"
      />
    </View>
  );
}

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import Colors from '../Theme/Colors';
import {CommonStyle, wp} from '../Theme/Dimensions';
import {getIcons, Icons} from '../Assets/Svg/Icons';
import {Value} from 'react-native-reanimated';

interface CProps {
  title?: any;
  DropDown?: any;
  placeholder?: any;
  width?: any;
  keyboardType?: any;
  style?: any;
  txtStyle?: any;
  placeholderTextColor?: any;
  secureTextEntry?: any;
  onChangeText?: any;
  onFocus?: any;
  value?: any;
  securePress?: any;
}
export default function InputMain(Props: CProps) {
  let ref = useRef();

  const {
    title,
    DropDown,
    placeholderTextColor,
    style,
    txtStyle,
    onChangeText,
    onFocus,
    value,
    securePress,
    placeholder,
    secureTextEntry,
    width,
    keyboardType,
  } = Props;
  return (
    <View>
      <TouchableOpacity
        activeOpacity={5}
        onPress={() => {
          ref.current.focus();
        }}
        style={[styles.searchBarContaner, style]}>
        <TextInput
          placeholder={placeholder}
          style={[styles.serchBarTextfield]}
          onChangeText={value => onChangeText(value)}
          onFocus={onFocus}
          keyboardType={keyboardType}
          value={value}
          ref={ref}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : 'gray'
          }
        />
        <TouchableOpacity activeOpacity={5} onPress={securePress}>
          {getIcons(Icons.EYES, wp(7), Colors.white)}
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarContaner: {
    flexDirection: 'row',
    backgroundColor: Colors.input,
    borderWidth: 2,
    borderColor: Colors.Black,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    marginVertical: 10,
  },
  serchBarTextfield: {
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    color: 'black',
    padding: 10,
    borderColor: Colors.Black,
    width: wp(60),
  },
  txt: CommonStyle(14, 21, Colors.Black, '500'),
});

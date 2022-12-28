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
import Colors from '../../Theme/Colors';
import {CommonStyle, hp, wp} from '../../Theme/Dimensions';
import {getIcons, Icons} from '../../Assets/Svg/Icons';

interface CProps {
  title?: any;
  DropDown?: any;
  placeholder?: any;
  width?: any;
  keyboardType?: any;
  style?: any;
  txtStyle?: any;
  placeholderTextColor?: any;
}
export default function SearchInput(Props: CProps) {
  let ref = useRef();

  const {
    title,
    DropDown,
    placeholderTextColor,
    style,
    txtStyle,
    placeholder,
    width,
    keyboardType,
  } = Props;
  return (
    <TouchableOpacity
      activeOpacity={5}
      onPress={() => {
        ref.current.focus();
      }}
      style={[styles.searchBarContaner, style]}>
      {getIcons(Icons.SEARCH)}
      <TextInput
        placeholder={placeholder}
        style={[styles.serchBarTextfield]}
        onChange={() => {}}
        keyboardType={keyboardType}
        ref={ref}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : 'gray'
        }
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  searchBarContaner: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.Blue,
    paddingHorizontal: 10,
    alignItems: 'center',
    paddingVertical: 5,
    marginVertical: 10,
    height: hp(7),
    marginHorizontal: 10,
  },
  serchBarTextfield: {
    alignContent: 'center',
    color: 'black',
    width: wp(80),
  },
  txt: CommonStyle(14, 21, Colors.Black, '500'),
});

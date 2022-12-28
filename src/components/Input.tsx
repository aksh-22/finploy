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
export default function Input(Props: CProps) {
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
    <View>
      {title ? (
        <Text style={[styles.txt, {marginLeft: 10}, txtStyle]}>{title}</Text>
      ) : null}
      <TouchableOpacity
        activeOpacity={5}
        onPress={() => {
          ref.current.focus();
        }}
        style={[styles.searchBarContaner, style]}>
        <TextInput
          placeholder={placeholder}
          style={[styles.serchBarTextfield, {width: width}]}
          onChange={() => {}}
          keyboardType={keyboardType}
          ref={ref}
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : 'gray'
          }
        />
        <View>{DropDown && getIcons(Icons.DOWNARROW)}</View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarContaner: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.Grey,
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
  },
  txt: CommonStyle(14, 21, Colors.Black, '500'),
});

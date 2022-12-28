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
import {CommonStyle, hp, wp} from '../Theme/Dimensions';
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
  IconName?: any;
  DOWN?: any;
}
export default function IconInput(Props: CProps) {
  let ref = useRef();

  const {
    title,
    DropDown,
    placeholderTextColor,
    style,
    txtStyle,
    placeholder,
    DOWN,
    width,
    keyboardType,
    IconName,
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
        {getIcons(IconName)}
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
        {DOWN && getIcons(Icons.DOWN, wp(4))}
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
    alignItems: 'center',
    paddingVertical: wp(2),
    marginVertical: wp(2),
    height: hp(6),
  },
  serchBarTextfield: {
    height: hp(5),
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

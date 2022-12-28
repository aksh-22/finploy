import React, {useState} from 'react';
import {
  ViewStyle,
  StyleProp,
  TextInput,
  KeyboardTypeOptions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Colors from '../Theme/Colors';

interface Props {
  value?: string | undefined;
  editable?: boolean;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  onChangeText?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  maxLength?: number;
  getInputRef?: (ref: TextInput | null) => void;
  onSubmitEditing?: () => void;
  returnKeyType?: 'none' | 'done' | 'next' | 'search';
  validationMessage?: string;
  multiline?: boolean;
  text?: string;
  is_icon?: boolean;
  userData?: any;
  onChange?: any;
  blurOnSubmit?: any;
  ref?: any;
  crossButton?: boolean;
  autoFocus?: any;
  OnClosePress?: (text: string) => void;
  showSoftInputOnFocus?: any;
  onPressEdit?: (text: string) => void;
  onPressCross?: (text: string) => void;
  isSearchIcon?: boolean;
  textStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  props?: any;
  onKeyPress?: (text: any) => void;
}

const TextInputComp = ({
  value,
  placeholder,
  onChangeText,
  keyboardType,
  secureTextEntry = false,
  autoCapitalize,
  maxLength,
  style,
  editable = true,
  crossButton,
  getInputRef,
  blurOnSubmit,
  onSubmitEditing,
  returnKeyType,
  validationMessage,
  autoFocus,
  multiline,
  is_icon,
  ref,
  showSoftInputOnFocus,
  onPressEdit,
  isSearchIcon,
  onChange,
  OnClosePress,
  containerStyle,
  onKeyPress,
}: Props) => {
  const [focus, setFocus] = useState(false);
  return (
    <TextInput
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      ref={ref}
      blurOnSubmit={blurOnSubmit}
      onChangeText={onChangeText}
      keyboardType={'number-pad'}
      autoCapitalize={autoCapitalize}
      autoCorrect={false}
      onFocus={() => {
        setFocus(true);
      }}
      onBlur={() => {
        setFocus(false);
      }}
      autoFocus={autoFocus}
      secureTextEntry={secureTextEntry}
      onSubmitEditing={onSubmitEditing}
      multiline={multiline}
      onKeyPress={onKeyPress}
      editable={editable}
      showSoftInputOnFocus={showSoftInputOnFocus}
      style={[
        {
          borderBottomWidth: value ? 0 : 1,
          height: 50,
          color: Colors.Black,
        },
        style,
      ]}
      returnKeyType={returnKeyType}
      placeholder={placeholder}
      textContentType="telephoneNumber"
      ref={ref => {
        if (getInputRef) getInputRef(ref);
      }}
    />
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  inputComponent: {
    height: scale(50),
    borderRadius: scale(10),
    paddingLeft: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(20),
    backgroundColor: Colors.Prime,
  },
  text: {
    // marginTop: moderateScale(4),
    marginLeft: moderateScale(5),
    color: 'red',
    fontSize: moderateScale(11),
    // fontFamily: Config.fonts.REGULAR,
  },
  textHeading: {
    color: Colors.Prime,
    fontSize: scale(13),
    marginLeft: moderateScale(15),
    marginBottom: scale(5),
  },
  iconStyle: {
    backgroundColor: Colors.Prime,
    height: moderateScale(30),
    width: moderateScale(30),
    position: 'absolute',
    right: moderateScale(10),
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIconStyle: {
    backgroundColor: Colors.Prime,
    height: moderateScale(30),
    width: moderateScale(30),
    position: 'absolute',
    left: moderateScale(10),
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TextInputComp;

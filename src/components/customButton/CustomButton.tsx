import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import styles from './button.style';
import Colors from '../../Theme/Colors';

type Props = {
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  text: string;
  disable?: boolean;
  isLoading?: boolean;
};

const CustomButton = ({
  onPress,
  style,
  textStyle,
  text,
  disable,
  isLoading,
}: Props) => {
  return (
    <TouchableOpacity
      disabled={disable || isLoading}
      activeOpacity={5}
      onPress={onPress}
      style={[
        styles.container,
        style,
        {backgroundColor: disable ? Colors.Grey : Colors.green},
      ]}>
      {isLoading ? (
        <ActivityIndicator color={Colors.white} />
      ) : (
        <Text style={[styles.btnText, textStyle]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

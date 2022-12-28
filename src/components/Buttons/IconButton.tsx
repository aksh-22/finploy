import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {getIcons, Icons} from '../../Assets/Svg/Icons';
import {wp} from '../../Theme/Dimensions';
import {colors} from '../../Utils/colors';
import Colors from '../../Theme/Allcolors';

interface CProps {
  title?: any;
  onPress?: any;
}

export default function IconButton(props: CProps) {
  const {onPress, title} = props;
  return (
    <TouchableOpacity
      activeOpacity={5}
      style={styles.btnContainer}
      onPress={onPress}>
      {getIcons(Icons.FILTER)}
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: wp(10),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
  },
  btnText: {
    fontSize: 16,
    color: Colors.Black,
    fontWeight: '600',
    lineHeight: 19.36,
  },
});

import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import RightIcon from '../../Assets/Svg/RightIcon.svg';

export default function NextBtn({screen}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={5}
      style={styles.btnContainer}
      onPress={() => {
        navigation.navigate(screen);
      }}>
      <Text style={styles.btnText}>Next</Text>
      <RightIcon style={{marginHorizontal: 5}} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#175DA8',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  btnText: {
    font: 14,
    color: 'white',
  },
});

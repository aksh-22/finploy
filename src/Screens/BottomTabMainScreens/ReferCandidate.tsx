import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';

import Header from '../../components/Header';
import {english} from '../../Theme/string';
import Fonts from '../../Theme/Fonts';
import Colors from '../../Theme/Colors';
import Input from '../../components/Input';
import {colors} from '../../Utils/colors';
import IconInput from '../../components/IconInput';
import {getIcons, Icons} from '../../Assets/Svg/Icons';
import {wp} from '../../Theme/Dimensions';
import GreenBtn from '../../components/Buttons/BasicBtn';
import IconButton from '../../components/Buttons/IconButton';

export default function ReferCandidate(props: any) {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <Text>ReferCandidate</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderColor: colors.blue,
    margin: 10,
    borderRadius: 4,
  },
  button: {
    backgroundColor: colors.lightBlue,
    paddingHorizontal: wp(9),
    borderWidth: 0,
  },
  SearchButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  filterButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: wp(5),
  },
  referCardHeader: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
    lineHeight: 19.36,
  },
  txt: {
    paddingVertical: 10,
    marginLeft: wp(6),
  },
  buttonGrey: {
    backgroundColor: colors.lightGray,
    paddingHorizontal: 10,
    borderRadius: 30,
    marginHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

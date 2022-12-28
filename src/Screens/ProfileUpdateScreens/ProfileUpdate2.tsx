import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ScrollView,
  LogBox,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import PUProgBar1 from '../../components/PUProgBars/PUProgBar1';
import IconCard from '../../components/Cards/IconCard';
import SkipBtn from '../../components/Buttons/SkipBtn';
import NextBtn from '../../components/Buttons/NextBtn';

import {Dropdown} from 'react-native-element-dropdown';
import CommonLayout from '../../Theme/CommonLayout';
import Colors from '../../Theme/Colors';
import {wp} from '../../Theme/Dimensions';
import {colors} from 'react-native-elements';
import Fonts from '../../Theme/Fonts';
import {TouchableOpacity} from 'react-native-gesture-handler';

const data = [
  {
    id: 1,
    uri: require('../../Assets/Location.png'),
    text: 'Mumbai',
  },
  {
    id: 2,
    uri: require('../../Assets/Location.png'),
    text: 'Delhi NCR',
  },
  {
    id: 3,
    uri: require('../../Assets/Location.png'),
    text: 'Bangalore',
  },
  {
    id: 4,
    uri: require('../../Assets/Location.png'),
    text: 'Chennai',
  },
  {
    id: 5,
    uri: require('../../Assets/Location.png'),
    text: 'Hyderabad',
  },
  {
    id: 6,
    uri: require('../../Assets/Location.png'),
    text: 'Pune',
  },
  {
    id: 7,
    uri: require('../../Assets/Location.png'),
    text: 'Kolkata',
  },
  {
    id: 8,
    uri: require('../../Assets/Location.png'),
    text: 'Surat',
  },
  {
    id: 9,
    uri: require('../../Assets/Location.png'),
    text: 'Ahmadabad',
  },
];

export default function ProfileUpdate2() {
  const cityData = [
    {label: 'Mumbai', value: 'Mumbai'},
    {label: 'Pune', value: 'Pune'},
    {label: 'Rajasthan', value: 'Rajasthan'},
    {label: 'Delhi NCR', value: 'Delhi NCR'},
    {label: 'Ahmadabad', value: 'Ahmadabad'},
    {label: 'Surat', value: 'Surat'},
    {label: 'Kolkata', value: 'Kolkata'},
    {label: 'Hyderabad', value: 'Hyderabad'},
    {label: 'Chennai', value: 'Chennai'},
    {label: 'Bangalore', value: 'Bangalore'},
  ];
  const [value, setValue] = useState(null);
  const [selectedCity, setSelectedCity] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);
  return (
    <SafeAreaView style={CommonLayout.common}>
      {/* Progress Bar 1 */}
      <PUProgBar1 />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Title */}
        <Text style={styles.title}>{'Which City do you live in?'}</Text>

        {/* Gender Cards */}
        <FlatList
          scrollEnabled={false}
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                setSelectedCity(item.text);
              }}>
              <IconCard
                uri={item.uri}
                text={item.text}
                selected={selectedCity === item.text ? true : false}
              />
            </TouchableOpacity>
          )}
          numColumns={2}
        />

        {/* Separator */}
        <View style={styles.OR}>
          <View style={styles.ORView} />
          <Text style={[Fonts.lightGreyTxtVeryShort, {marginHorizontal: 10}]}>
            {'or'}
          </Text>
          <View style={styles.ORView} />
        </View>

        {/* DrpDown City Selector */}

        <Dropdown
          data={cityData}
          labelField="label"
          valueField="value"
          placeholder={'Select Location'}
          searchPlaceholder="Search..."
          value={value}
          style={styles.dropdown}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <SkipBtn screen={'HomeNavigator'} />
          <NextBtn screen={'ProfileUpdate3'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  dropdown: {
    margin: 16,
    height: wp(10),
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  OR: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ORView: {
    borderBottomWidth: 1,
    width: wp(40),
    borderColor: Colors.Grey,
  },
});

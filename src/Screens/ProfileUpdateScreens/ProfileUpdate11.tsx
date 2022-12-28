import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

import PUProgBar5 from '../../components/PUProgBars/PUProgBar5';
import {Dropdown} from 'react-native-material-dropdown-v2';
import CheckBox from '@react-native-community/checkbox';
import DropDownPicker from 'react-native-dropdown-picker';

import SkipBtn from '../../components/Buttons/SkipBtn';
import NextBtn from '../../components/Buttons/NextBtn';

export default function ProfileUpdate11() {
  const [isSelected, setSelection] = useState(false);
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 20,
        paddingTop: 20,
        flex: 1,
        backgroundColor: 'white',
      }}>
      {/* Progress Bar 1 */}
      <PUProgBar5 />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Training/Certification */}
        <Text style={styles.title}>{'Training/Certification'}</Text>

        {/* Training/Certification Program */}
        <Text style={styles.subTitle}>{'Training/Certification Program.'}</Text>
        {/* <Dropdown
          itemCount={6}
          style={{
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#6F6F6F',
            backgroundColor: 'white',
            height: 60,
            elevation: 10,
            shadowColor: '#000000',
          }}
          containerStyle={{
            padding: 10,
          }}
        /> */}

        {/* Organisation */}
        <Text style={styles.subTitle}>{'Organisation'}</Text>
        <TextInput
          placeholder="State bank of India"
          placeholderTextColor={'#6f6f6f'}
          style={styles.inputBox}
        />

        {/* Check box */}
        <View style={styles.checkboxContainer}>
          <CheckBox
            onCheckColor="#175DA8"
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.label}>{'Online'}</Text>
        </View>

        {/* Duration */}
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={styles.subTitle}>{'Start Date'}</Text>
            <TextInput placeholder="05/2020" style={styles.inputBox} />
          </View>
          <View>
            <Text style={styles.subTitle}>{'End Date'}</Text>
            <TextInput placeholder="07/2020" style={styles.inputBox} />
          </View>
        </View>

        {/* Description */}
        <Text style={styles.subTitle}>{'Short Description'}</Text>
        <TextInput placeholder="Short Description" style={styles.inputBox} />

        {/* Buttons */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <SkipBtn screen={'HomeNavigator'} />
          <NextBtn screen={'HomeNavigator'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'black',
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 16,
    color: 'black',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  inputBox: {
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 10,
    flex: 1,
    height: 60,
    padding: 10,
    paddingHorizontal: 20,
    elevation: 10,
    shadowColor: '#000000',
    backgroundColor: 'white',
    borderColor: '#6F6F6F',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
    margin: 5,
    borderRadius: 5,
  },
  label: {
    margin: 5,
    alignSelf: 'center',
    color: 'black',
    fontSize: 16,
  },
});

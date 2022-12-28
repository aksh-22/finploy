import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import PUProgBar1 from '../../components/PUProgBars/PUProgBar1';
import SkipBtn from '../../components/Buttons/SkipBtn';
import NextBtn from '../../components/Buttons/NextBtn';

import CheckBox from '@react-native-community/checkbox';
import {Dropdown} from 'react-native-material-dropdown-v2';
import DropDownPicker from 'react-native-dropdown-picker';

export default function ProfileUpdate4() {
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
      <PUProgBar1 />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Work Experience */}
        <Text style={styles.title}>{'Work Experience'}</Text>

        {/* Job title */}
        <Text style={styles.subTitle}>{'Job title'}</Text>
        {/* <Dropdown
          itemCount={6}
          style={{
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: 'white',
            height: 60,
            elevation: 10,
            shadowColor: '#000000',
          }}
          containerStyle={{
            padding: 10,
          }}
        /> */}

        {/* Job Sector */}
        <Text style={styles.subTitle}>{'Job Sector'}</Text>
        {/* <Dropdown
          itemCount={6}
          style={{
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: 'white',
            height: 60,
            elevation: 10,
            shadowColor: '#000000',
          }}
          containerStyle={{
            padding: 10,
          }}
        /> */}

        {/* Department */}
        <Text style={styles.subTitle}>{'Department'}</Text>
        <TextInput style={styles.inputBox} />

        {/* Company */}
        <Text style={styles.subTitle}>{'Company'}</Text>
        <TextInput placeholder="State bank of India" style={styles.inputBox} />

        {/* Duration */}
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={styles.subTitle}>{'Start Month'}</Text>
            <TextInput placeholder="05/2020" style={styles.inputBox} />
          </View>

          {isSelected ? (
            // Disabled Checkbox
            <View>
              <Text
                style={{
                  fontSize: 18,
                  color: 'gray',
                  marginVertical: 10,
                  marginHorizontal: 30,
                }}>
                {'Start Month'}
              </Text>
              <TextInput
                editable={false}
                selectTextOnFocus={false}
                placeholder="07/2020"
                style={{
                  borderWidth: 1,
                  borderRadius: 5,
                  marginHorizontal: 10,
                  flex: 1,
                  height: 60,
                  color: 'gray',
                  borderColor: 'gray',
                  padding: 10,
                }}
              />
            </View>
          ) : (
            <View>
              <Text style={styles.subTitle}>{'Start Month'}</Text>
              <TextInput placeholder="07/2020" style={styles.inputBox} />
            </View>
          )}
        </View>

        {/* Location */}
        <Text style={styles.subTitle}>{'Company'}</Text>
        <TextInput placeholder="Hyderabad" style={styles.inputBox} />

        {/* Check box */}
        <View style={styles.checkboxContainer}>
          <CheckBox
            onCheckColor="#175DA8"
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.label}>
            {'I am Currently working in this company'}
          </Text>
        </View>

        {/* Buttons */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <SkipBtn screen={'HomeNavigator'} />
          <NextBtn screen={'ProfileUpdate5'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  subTitle: {
    fontSize: 18,
    color: 'black',
    marginVertical: 10,
    marginHorizontal: 30,
  },
  inputBox: {
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 10,
    flex: 1,
    height: 60,
    padding: 10,
    elevation: 10,
    shadowColor: '#000000',
    backgroundColor: 'white',
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

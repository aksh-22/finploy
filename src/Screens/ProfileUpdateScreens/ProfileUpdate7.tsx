import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

import PUProgBar3 from '../../components/PUProgBars/PUProgBar3';
import {Dropdown} from 'react-native-material-dropdown-v2';
import CheckBox from '@react-native-community/checkbox';
import DropDownPicker from 'react-native-dropdown-picker';

import SkipBtn from '../../components/Buttons/SkipBtn';
import NextBtn from '../../components/Buttons/NextBtn';

export default function ProfileUpdate7() {
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
      <PUProgBar3 />

      <ScrollView>
        {/* Education */}
        <Text style={styles.title}>{'Education'}</Text>

        {/* Education Level */}
        <Text style={styles.subTitle}>{'Education Level'}</Text>
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

        {/* Field of Study */}
        <Text style={styles.subTitle}>{'Field of study'}</Text>
        <TextInput style={styles.inputBox} />

        {/* Graduation Year */}
        <Text style={styles.subTitle}>{'Graduation Year'}</Text>
        <TextInput style={styles.inputBox} />

        {/* Check box */}
        <View style={styles.checkboxContainer}>
          <CheckBox
            onCheckColor="#175DA8"
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.label}>
            {'I am a student or have recently graduated'}
          </Text>
        </View>

        {/* Location */}
        <Text style={styles.subTitle}>{'Location'}</Text>
        <TextInput placeholder="Hyderabad" style={styles.inputBox} />

        {/* Educational Establishment */}
        <Text style={styles.subTitle}>{'Educational Establishment'}</Text>
        <TextInput style={styles.inputBox} />

        {/* Buttons */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <SkipBtn screen={'HomeNavigator'} />
          <NextBtn screen={'ProfileUpdate8'} />
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

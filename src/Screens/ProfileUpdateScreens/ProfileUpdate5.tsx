import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import PUProgBar2 from '../../components/PUProgBars/PUProgBar2';
import SkipBtn from '../../components/Buttons/SkipBtn';
import NextBtn from '../../components/Buttons/NextBtn';

import GrayCrossIcon from '../../Assets/Svg/GrayCrossIcon.svg';

const recommendedSkills = [
  'Sales',
  'Team Management',
  'Relationship management',
  'Direct sale',
  'Team',
];

export default function ProfileUpdate5() {
  const [inputText, setInputText] = useState('');
  const inputHandle = text => {
    setInputText(text);
    console.log(inputText);
  };
  const removeSelectedSkill = skill => {
    setSelectedSkills(selectedSkills.filter(item => item != skill));
  };
  const [selectedSkills, setSelectedSkills] = useState(['Management']);
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 20,
        paddingTop: 20,
        flex: 1,
        backgroundColor: 'white',
      }}>
      {/* Progress Bar 1 */}
      <PUProgBar2 />

      <ScrollView>
        {/* Skills */}
        <Text style={styles.title}>{'Tell us about your skills'}</Text>

        {/* Skills add manually */}
        <Text style={styles.subTitle}>
          {'Add 6 or more skills to get 3x more recruiters view'}
        </Text>
        <TextInput
          placeholder="Enter your skills"
          style={styles.inputBox}
          onChangeText={text => {
            setInputText(text);
          }}
          onSubmitEditing={() => {
            inputText == ''
              ? alert('Please Enter a Skill...!')
              : setSelectedSkills([inputText, ...selectedSkills]);
          }}
        />

        {/* Selected Skills */}
        <Text style={styles.subTitle}>{'Selected skills'}</Text>
        <FlatList
          numColumns={2}
          data={selectedSkills}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  padding: 8,
                  backgroundColor: '#E8EFF6',
                  borderRadius: 5,
                  margin: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'black'}}>{item}</Text>
                <TouchableOpacity
                  onPress={() => {
                    removeSelectedSkill(item);
                  }}>
                  <GrayCrossIcon style={{margin: 5}} />
                </TouchableOpacity>
              </View>
            );
          }}
        />

        {/* Separator */}
        <View
          style={{
            height: 2,
            backgroundColor: '#9E9E9E',
            marginHorizontal: 60,
            marginVertical: 20,
          }}
        />

        {/* Recomended Skills */}
        <Text style={[styles.subTitle, {color: 'gray'}]}>
          {'Choose from recommended skills'}
        </Text>
        <FlatList
          numColumns={2}
          data={recommendedSkills}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  padding: 8,
                  backgroundColor: 'white',
                  borderRadius: 5,
                  margin: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  elevation: 10,
                  shadowColor: '#000000',
                }}
                onPress={() => {
                  setSelectedSkills([item, ...selectedSkills]);
                }}>
                <Text style={{color: '#9E9E9E', fontWeight: 'bold'}}>
                  {item}
                </Text>
                <GrayCrossIcon style={{margin: 5}} />
              </TouchableOpacity>
            );
          }}
        />

        {/* Buttons */}

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <SkipBtn screen={'HomeNavigator'} />
          <NextBtn screen={'ProfileUpdate6'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'black',
    marginHorizontal: 10,
  },

  subTitle: {
    fontSize: 18,
    color: 'black',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  inputBox: {
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: 'white',
    borderColor: '#9E9E9E',
  },
});

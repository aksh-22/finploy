import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import PUProgBar1 from '../../components/PUProgBars/PUProgBar1';
import IconCard from '../../components/Cards/IconCard';
import SkipBtn from '../../components/Buttons/SkipBtn';
import NextBtn from '../../components/Buttons/NextBtn';
import {wp} from '../../Theme/Dimensions';
import {english} from '../../Theme/string';
import Fonts from '../../Theme/Fonts';
import Colors from '../../Theme/Colors';
import CommonLayout from '../../Theme/CommonLayout';
import storage from '../../Utils/storage';
import EndPoints from '../../Utils/EndPoints';

const data = [
  {
    id: 1,
    uri: require('../../Assets/Male.png'),
    text: 'Male',
  },
  {
    id: 2,
    uri: require('../../Assets/Female.png'),
    text: 'Female',
  },
  {
    id: 3,
    uri: require('../../Assets/NonBinary.png'),
    text: 'Non Binary',
  },
  {
    id: 4,
    uri: require('../../Assets/PreferNotToSay.png'),
    text: 'Prefer not\nto Say',
  },
];

export default function ProfileUpdate1() {
  const [token, setToken] = useState(null);
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');

  const nextUpdateProfileHandler = async () => {
    const data = {
      gender: gender,
      email: email.trim(),
    };

    // const result = await RequestAPIAction(
    //   EndPoints.user.addGender,
    //   'POST',
    //   data,
    //   token,
    // );
    // if (result.code === 200 || result.code === 201) {
    // console.log(result?.code)
    // }

    navigation.navigate('ProfileUpdate2');
  };

  return (
    <SafeAreaView style={CommonLayout.common}>
      {/* Progress Bar 1 */}
      <PUProgBar1 />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Title */}
        <Text style={[Fonts.NormalTxt, styles.margin]}>
          {english.WelcomeFinploy}
        </Text>
        {/* Description */}
        <Text style={[Fonts.lightGreyTxtShort]}>{english.headingProfile1}</Text>

        {/* Question */}
        <Text style={[Fonts.NormalTxt, styles.margin]}>
          {english.WhatIdentity}
        </Text>

        {/* Gender Cards */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FlatList
            data={data}
            scrollEnabled={false}
            renderItem={({item}) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  setGender(item.text);
                }}>
                <IconCard
                  uri={item.uri}
                  text={item.text}
                  selected={item.text === gender ? true : false}
                />
              </TouchableOpacity>
            )}
            numColumns={2}
          />
        </View>

        {/* Email Input */}
        <TextInput
          keyboardType="email-address"
          style={styles.emailInput}
          onChangeText={text => {
            setEmail(text);
          }}
          placeholder="loremepsum12@gmail.com"
          placeholderTextColor={'#9E9E9E'}
        />
        <Text style={[Fonts.shortTxtRed, {marginTop: wp(4)}]}>
          {english.subtitle}
        </Text>

        {/* Buttons */}
      </ScrollView>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <SkipBtn screen={'HomeNavigator'} />
          <NextBtn
            onPress={nextUpdateProfileHandler}
            screen={'ProfileUpdate2'}
          />
        </View>
      </View>
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
  emailInput: {
    borderWidth: 1,
    borderColor: '#9E9E9E',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: wp(10),
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 20,
    flex: 1,
    backgroundColor: Colors.white,
  },
  margin: {
    marginVertical: wp(7),
  },
  txt: {
    color: '#A60000',
    marginVertical: 20,
  },
});

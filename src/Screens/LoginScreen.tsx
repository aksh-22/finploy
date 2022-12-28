import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TopCircle from '../Assets/Svg/topcircle.svg';
import Candidate from '../Assets/Svg/Candidate.svg';
import Employer from '../Assets/Svg/Employer.svg';
import Partner from '../Assets/Svg/Partner.svg';
import {useNavigation} from '@react-navigation/native';
import {english} from '../Theme/string';
import {wp} from '../Theme/Dimensions';

function LoginScreen() {
  const navigation: any = useNavigation();
  const ImageSize = 30;

  const press = () => {
    // navigation.navigate('International');
    navigation.navigate('LoginCandidate');
    // navigation.navigate('ProfileUpdate1');
  };

  return (
    <>
      <TopCircle />
      <View style={styles.container}>
        <Text style={styles.topTxt}>{english.LoginAs}</Text>
        <View style={styles.body}>
          <TouchableOpacity
            activeOpacity={5}
            style={styles.button}
            onPress={press}>
            <Text style={styles.txt}>{english.Candidate}</Text>
            <Candidate height={ImageSize} width={ImageSize} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={5} style={styles.button}>
            <Text style={styles.txt}>{english.Employer}</Text>
            <Employer height={ImageSize} width={ImageSize} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={5}
            style={styles.button}
            onPress={() => {
              navigation.navigate('PartnerAuthStack');
            }}>
            <Text style={styles.txt}>{english.Partner}</Text>
            <Partner height={ImageSize} width={ImageSize} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  button: {
    margin: 5,
    backgroundColor: 'rgba(23, 93, 168, 0.1)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: wp(7),
    paddingHorizontal: wp(3),
  },
  txt: {
    marginBottom: 10,
    fontWeight: '500',
    width: wp(22.5),
    textAlign: 'center',
  },
  body: {
    flexDirection: 'row',
    marginBottom: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topTxt: {
    marginBottom: 30,
    fontSize: 20,
    fontWeight: '500',
  },
});
export default LoginScreen;

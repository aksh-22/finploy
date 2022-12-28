import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Launch1 from '../Assets/Svg/launch1.svg';
function LaunchScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Launch2');
    }, 500);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.txtbtn1}>
        India’s 1st Digital Referral Chain{' '}
        <Text style={styles.txtbtn3}>JOB PORTAL</Text>
      </Text>
      <Launch1 />
      <Text style={styles.txtbtn2}>
        {
          'We serve only RBI / IRDA Registered Banks/NBFCs/ Insurance & Crypto entities'
        }
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  txtbtn1: {
    textAlign: 'center',
    padding: 4,
    width: '50%',
    color: '#175DA8',
    fontSize: 20,
    fontWeight: '500',
    paddingBottom: 70,
  },
  txtbtn2: {
    textAlign: 'center',
    padding: 4,
    width: '80%',
    color: '#175DA8',
    fontSize: 20,
    fontWeight: '500',
    paddingTop: 70,
  },
  txtbtn3: {
    textAlign: 'center',
    padding: 4,
    width: '80%',
    color: 'green',
    fontSize: 20,
    fontWeight: '500',
    paddingTop: 70,
  },
});
export default LaunchScreen;

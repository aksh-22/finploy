import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import Launch2 from '../Assets/Svg/launch2.svg';
import Launch2part from '../Assets/Svg/launch2part.svg';
import {setAccessToken} from '../redux/creators/AuthCreators';
import storage from '../Utils/storage';

function LaunchScreen2({navigation}) {
  const dispatch = useDispatch();
  useEffect(() => {
    storage.getItem('token').then(value => {
      if (value) {
        dispatch(setAccessToken(value));
        navigation.replace('HomeNavigator');
        // navigation.navigate('ProfileUpdate1');
      } else {
        setTimeout(() => {
          navigation.replace('onboard');
        }, 3000);
      }
    });
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.replace('onboard');
  //   }, 3000);
  // }, []);

  return (
    <View style={styles.container}>
      <Launch2 style={{marginBottom: 70}} />
      <Launch2part />
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
});
export default LaunchScreen2;

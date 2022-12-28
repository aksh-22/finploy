import React from 'react';
import {View, StyleSheet, Text, SafeAreaView, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TopCircle from '../Assets/Svg/topcircle.svg';

import {useNavigation} from '@react-navigation/native';
import Colors from '../Theme/Colors';

function LoginScreen(props?: any) {
  return (
    <>
      <View style={{zIndex: -1, backgroundColor: Colors.white}}>
        <TopCircle />
      </View>
      <ScrollView
        style={{backgroundColor: Colors.white, flex: 1}}
        showsVerticalScrollIndicator={false}>
        <SafeAreaView style={styles.component}>{props.children}</SafeAreaView>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  component: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
});
export default LoginScreen;

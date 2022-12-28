import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../Theme/Colors';
import HeaderBar from '../../components/Header';
import {CommonStyle, wp} from '../../Theme/Dimensions';
import Custom from '../../components/CustomInput';
import GreenBtn from '../../components/Buttons/BasicBtn';
import {NavigationContainer} from '@react-navigation/native';
import {english} from '../../Theme/string';
export default function JobAlert(Props: any) {
  return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <HeaderBar {...Props} />

      <ScrollView>
        <View style={{paddingHorizontal: 30}}>
          <View style={{borderBottomWidth: 0.5, paddingBottom: 16}}>
            <Text style={[styles.JobAlert, {paddingVertical: 10}]}>
              {english.JobAlerts}
            </Text>
            <Text style={[styles.Create, {paddingVertical: 10}]}>
              {english.CreateAlert}
            </Text>
            <Text style={CommonStyle(12, 14.52, Colors.Grey, '400')}>
              {english.CreateInbox}
            </Text>
          </View>

          <Custom label="Job Alert Name" placeholder="johndoe@gmail.com" />
          <Custom label="Email Id" placeholder="johndoe@gmail.com" />
          <Custom label="Keywords" placeholder="johndoe@gmail.com" />
          <Custom label="Preferred Industry" placeholder="johndoe@gmail.com" />
          <Custom
            label="Preferred Department/Function"
            placeholder="johndoe@gmail.com"
          />
          <Custom label="Total Experience" placeholder="johndoe@gmail.com" />
          <Custom
            onPress={() => Props.navigation.navigate('PreferredIndustry')}
            editable={false}
            label="Preferred Location"
            placeholder="johndoe@gmail.com"
          />
          <View style={{alignItems: 'center', marginVertical: 20}}>
            <GreenBtn
              tStyle={styles.buttonTxt}
              style={styles.button}
              text={'Create a free Job Alert'}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 29.05,
    color: Colors.Blue,
    paddingVertical: 20,
  },
  txtBalance: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19.36,
    color: Colors.Black,
    paddingLeft: 20,
  },
  txtRupee: {
    fontSize: 36,
    fontWeight: '700',
    lineHeight: 43.57,
    color: Colors.Black,
    marginLeft: wp(1),
  },
  ListTxt: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 40,
    color: Colors.Black,
    paddingLeft: 20,
  },
  ListView: {
    backgroundColor: Colors.grey,
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 10,
    borderRadius: 10,
  },

  margin: {
    marginHorizontal: 20,
  },
  width: {
    width: wp(70),
  },
  button: {
    backgroundColor: Colors.Blue,
    borderWidth: 0,
    paddingVertical: 10,
    width: wp(70),
  },
  buttonTxt: {
    color: Colors.white,
  },
  TxtHeader: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19.36,
    color: Colors.Blue,
    paddingLeft: 20,
  },
  JobAlert: CommonStyle(20, 24.2, Colors.Blue, '600'),
  waiting: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  Create: CommonStyle(16, 19.36, Colors.Black, '400'),
});

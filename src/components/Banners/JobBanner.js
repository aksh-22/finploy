import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

import Suitcase from '../../Assets/Svg/Suitcase.svg';
import Building from '../../Assets/Svg/Building.svg';
import GreenRupay from '../../Assets/Svg/GreenRupay.svg';
import Globe from '../../Assets/Svg/Globe.svg';
import {TouchableOpacity} from 'react-native-gesture-handler';

import GreenBtn from '../Buttons/GreenBtn';
import BasicBtn from '../Buttons/BasicBtn';
import Colors from '../../Theme/Colors';

export default function JobBanner() {
  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={{backgroundColor: '#707070', height: 2}} />
      <View style={styles.container}>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <Text style={styles.titleText}>Technical Project Manager</Text>
          <Image
            source={require('../../Assets/Share.png')}
            style={{height: 24, width: 24, marginHorizontal: 10}}
          />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flex: 1}}>
            <View style={styles.itemContainer}>
              <Suitcase />
              <Text style={styles.textStyle}>{'Hire as a Payroll'}</Text>
            </View>
            <View style={styles.itemContainer}>
              <GreenRupay />
              <Text style={styles.textStyle}>{'2 Lakh - 6 Lakh / Year'}</Text>
            </View>
          </View>
          <View style={{flex: 1}}>
            <View style={styles.itemContainer}>
              <Building />
              <Text style={styles.textStyle}>{'OnSite (Mumbai)'}</Text>
            </View>
            <View style={styles.itemContainer}>
              <Globe />
              <Text style={styles.textStyle}>{'IN'}</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={{color: '#000000', fontSize: 12}}>
            Project Managers (Team Lead) Product Managers JOB DESCRIPTION FOR
            TECHINCAL PROJECT MANAGER YOU WILL BE RESPONSIBLE FOR Working with
            internal teams to define project goals and deliverables Creating and
            managing project timelines Finding creative ways to keep teams
            informed of ...
          </Text>
        </View>

        <View style={styles.btnsContainer}>
          <BasicBtn
            style={{backgroundColor: Colors.green, borderWidth: 0}}
            tStyle={{color: Colors.lightGreyTxt}}
            text={'Edit Application'}
          />
          <BasicBtn text={'Withdraw'} />
        </View>
      </View>
      <View style={{backgroundColor: '#707070', height: 2}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#175DA8',
  },
  textStyle: {
    color: '#313131',
    fontSize: 14,
    marginHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  btnsContainer: {
    paddingVertical: 20,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});

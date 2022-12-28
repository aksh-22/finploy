import {View, StyleSheet, ScrollView, Text, FlatList} from 'react-native';
import React from 'react';

import Header from '../../components/Header';
import SliderButton from '../../components/SliderButton';
import Colors from '../../Theme/Colors';
import {getIcons, Icons} from '../../Assets/Svg/Icons';
import {wp} from '../../Theme/Dimensions';
import GreenBtn from '../../components/Buttons/GreenBtn';

export default function JobDetails(props?: any) {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView>
        <View style={{borderWidth: 1}}>
          <Text style={styles.txt}>REGIONAL CUSTOMER ACQUISITION MANAGER</Text>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                width: wp(45),
                justifyContent: 'space-between',
              }}>
              <View>{getIcons(Icons.FINANCE, wp(10))}</View>
              <View>
                <Text style={styles.commonText}>Muthoot Finance</Text>
                <Text style={styles.commonText}>Karnataka, India</Text>
              </View>
            </View>

            <View style={{bottom: 10}}>
              <GreenBtn Color={Colors.teal} text={'PERMANENT JOB'} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  txt: {
    fontSize: 16,
    color: Colors.Black,
    fontWeight: '500',
    lineHeight: 19.36,
    width: wp(80),
  },
  commonText: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14.52,
    color: '#175DA8',
  },
});

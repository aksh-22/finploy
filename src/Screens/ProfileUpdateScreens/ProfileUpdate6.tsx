import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import PUProgBar3 from '../../components/PUProgBars/PUProgBar3';
import GrayCrossIcon from '../../Assets/Svg/GrayCrossIcon.svg';
import PlusIconBlue from '../../Assets/Svg/rorate-pluse.svg';
import SkipBtn from '../../components/Buttons/SkipBtn';
import NextBtn from '../../components/Buttons/NextBtn';

const highestEduData = [
  'MCA',
  'M.Sc',
  'B.A.',
  'B.Com',
  'B.Ed',
  'M.Tech',
  'MBA/PGDM',
  'BTech/B.E.',
];

export default function ProfileUpdate6() {
  const [selectDegree, setSelectDegree] = useState(null);
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
        {/* Highest Education */}
        <Text style={styles.title}>
          {'Let us know your highest educational qualification'}
        </Text>

        <Text style={styles.subTitle}>
          {'In case you are currently pursuing, select the same'}
        </Text>
        <FlatList
          numColumns={3}
          data={highestEduData}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => setSelectDegree(item)}
                activeOpacity={0.8}
                style={{
                  padding: 8,
                  backgroundColor: '#E8EFF6',
                  borderRadius: 5,
                  margin: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: selectDegree === item ? '#175DA8' : '#9E9E9E',
                    fontWeight: 'bold',
                  }}>
                  {item}
                </Text>
                {selectDegree === item ? (
                  <PlusIconBlue style={{margin: 5}} />
                ) : (
                  <GrayCrossIcon style={{margin: 5}} />
                )}
              </TouchableOpacity>
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

        <View style={{flex: 1, backgroundColor: 'green', height: '50%'}} />

        {/* Buttons */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'relative',
            top: 20,
          }}>
          <SkipBtn screen={'HomeNavigator'} />
          <NextBtn screen={'ProfileUpdate7'} />
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
    fontSize: 14,
    color: 'black',
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

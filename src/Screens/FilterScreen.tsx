import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

import {Header} from 'react-native-elements';
import MenuIcon from '../Assets/Svg/MenuIcon.svg';
import LeftArrow from '../Assets/Svg/LeftArrow.svg';

import {useNavigation} from '@react-navigation/native';

export default function FilterScreen() {
  const navigation = useNavigation();
  const [matchingResult, setMatchingResult] = useState(0);

  const [filters, setFilters] = useState([
    {
      filterName: 'Posted Date',
      isNew: false,
      selected: true,
    },
    {
      filterName: 'Location',
      isNew: false,
      selected: true,
    },
    {
      filterName: 'Distance',
      isNew: false,
      selected: false,
    },
    {
      filterName: 'Sectors',
      isNew: false,
      selected: false,
    },
    {
      filterName: 'PositionType',
      isNew: true,
      selected: false,
    },
    {
      filterName: 'Works Arrangements',
      isNew: false,
      selected: false,
    },
    {
      filterName: 'Employment Type',
      isNew: false,
      selected: false,
    },
    {
      filterName: 'Experience Level',
      isNew: false,
      selected: false,
    },
    {
      filterName: 'Salary Range',
      isNew: false,
      selected: false,
    },
  ]);

  const filterHandler = item => {
    console.log(item);
  };
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Header
        placement="left"
        leftComponent={<MenuIcon style={{margin: 5}} />}
        centerComponent={
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../Assets/HeaderLogo.png')}
              style={{width: 137, height: 32}}
            />
          </View>
        }
        rightComponent={
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 40,
              backgroundColor: '#175DA8',
            }}>
            <Image
              style={{
                height: 40,
                width: 40,
                borderRadius: 40,
              }}
              source={{uri: null}}
            />
          </View>
        }
        containerStyle={{
          backgroundColor: '#ffffff',
          justifyContent: 'center',
        }}
      />
      <ScrollView>
        <View
          style={{
            paddingVertical: 8,
            paddingHorizontal: 20,
            backgroundColor: '#F5F5F5',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#111111'}}>{'All Jobs(100)'}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#E8EFF6',
            paddingVertical: 10,
          }}>
          <TouchableOpacity
            style={{marginHorizontal: 10}}
            onPress={() => {
              navigation.goBack();
            }}>
            <LeftArrow />
          </TouchableOpacity>
          <Text style={{color: '#111111', fontSize: 16}}>{'Filters'}</Text>
        </View>

        {/* Matching Results */}
        <View style={{paddingVertical: 20}}>
          <Text style={{color: '#111111', textAlign: 'center'}}>
            {matchingResult + ' Matching Results\nFilters Jobs'}
          </Text>
        </View>

        {/* Flters */}
        <FlatList
          data={filters}
          renderItem={({item}) => {
            return (
              <View style={{marginHorizontal: 20}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginHorizontal: 10,
                    marginVertical: 5,
                  }}>
                  <Text style={{fontSize: 16, color: '#111111'}}>
                    {item.filterName}
                  </Text>
                  {item.isNew ? (
                    <View
                      style={{
                        backgroundColor: '#4EA647',
                        paddingVertical: 4,
                        paddingHorizontal: 8,
                        borderRadius: 5,
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          color: 'white',
                          fontWeight: '600',
                        }}>
                        {'New'}
                      </Text>
                    </View>
                  ) : (
                    <></>
                  )}
                  {item.selected ? (
                    <TouchableOpacity
                      style={{
                        width: 15,
                        height: 15,
                        borderRadius: 10,
                        backgroundColor: '#175DA8',
                      }}
                      onPress={() => {
                        filterHandler(item);
                      }}
                    />
                  ) : (
                    <TouchableOpacity
                      style={{
                        width: 15,
                        height: 15,
                        borderRadius: 10,
                        backgroundColor: '#C4C4C4',
                      }}
                      onPress={() => {
                        filterHandler(item);
                      }}
                    />
                  )}
                </View>
                <View
                  style={{
                    marginVertical: 5,
                    height: 1,
                    backgroundColor: '#E9E9E9',
                  }}
                />
              </View>
            );
          }}
        />

        {/* Apply Button  */}
        <TouchableOpacity
          style={styles.applyBtn}
          onPress={() => {
            navigation.navigate('AllJobsScreen');
          }}>
          <Text style={{fontSize: 16, color: 'white'}}>{'Apply'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  applyBtn: {
    alignSelf: 'center',
    marginVertical: 20,
    paddingVertical: 8,
    paddingHorizontal: 40,
    backgroundColor: '#175DA8',
    borderRadius: 5,
  },
});

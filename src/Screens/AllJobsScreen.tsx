import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';

import {Header} from 'react-native-elements';
import MenuIcon from '../Assets/Svg/MenuIcon.svg';
import SearchIcon from '../Assets/Svg/SearchIcon.svg';
import LocationLightIcon from '../Assets/Svg/LocationLightIcon.svg';
import UserLocation from '../Assets/Svg/UserLocation.svg';
import OfficeBag from '../Assets/Svg/OfficeBag.svg';
import FilterIcon from '../Assets/Svg/FilterIcon.svg';

import AllJobBanner from '../components/Banners/AllJobBanner';

import {useNavigation} from '@react-navigation/native';
import HeaderBar from '../components/Header';
import {useSelector} from 'react-redux';

const data = {
  searchInputData: [
    {
      id: 1,
      icon: <SearchIcon />,
      placeholder: 'Keyword',
    },
    {
      id: 2,
      icon: <LocationLightIcon />,
      placeholder: 'City/Country',
    },
    {
      id: 3,
      icon: <UserLocation />,
      placeholder: 'Work Arrangement',
    },
    {
      id: 3,
      icon: <OfficeBag />,
      placeholder: 'Job Title',
    },
  ],
};

const InputBox = () => {
  return (
    <FlatList
      data={data.searchInputData}
      renderItem={item => {
        console.log(item);
        return (
          <View style={styles.inputBox}>
            {item.item.icon}
            <TextInput
              placeholder={item.item.placeholder}
              placeholderTextColor="gray"
              style={{flex: 1}}
            />
          </View>
        );
      }}
    />
  );
};

export default function AllJobsScreen() {
  const navigation = useNavigation();
  const userData = useSelector(state => state.persistedReducer.preference);

  // console.log(navigation);
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Header
        placement="left"
        leftComponent={
          <Pressable
            onPress={() => {
              navigation.openDrawer();
            }}>
            <MenuIcon style={{margin: 5}} />
          </Pressable>
        }
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
              width: 40,
              height: 40,
              borderRadius: 100,
              backgroundColor: '#E8EFF6',
            }}>
            <Image
              source={{uri: userData?.profilePic}}
              style={{
                width: 40,
                height: 40,
                borderRadius: 100,
                backgroundColor: '#E8EFF6',
              }}
            />
          </View>
        }
        containerStyle={{
          backgroundColor: '#ffffff',
          justifyContent: 'center',
        }}
      />
      {/* <HeaderBar /> */}
      <ScrollView>
        <View
          style={{
            paddingVertical: 8,
            paddingHorizontal: 20,
            backgroundColor: '#F5F5F5',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>{'Search Jobs'}</Text>
        </View>

        <View style={{padding: 20}}>
          <InputBox />
        </View>

        {/* Search Btn */}
        <TouchableOpacity style={styles.searchBtn}>
          <Text style={{fontSize: 16, color: 'black'}}>{'Search'}</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 20,
          }}>
          <Text
            style={{
              marginHorizontal: 5,
              fontSize: 16,
              color: 'black',
              fontWeight: 'bold',
            }}>
            {'All Jobs'}
          </Text>

          {/* Filter Btn */}
          <TouchableOpacity
            style={styles.filterBtn}
            onPress={() => {
              navigation.navigate('FilterScreen');
            }}>
            <FilterIcon style={{margin: 5}} />
            <Text style={{color: 'black', fontWeight: 'bold'}}>
              {'Filters'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* All Job Banner */}
        <AllJobBanner />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#175DA8',
    margin: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  searchBtn: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: '#E8EFF6',
    borderRadius: 5,
    alignSelf: 'center',
  },
  filterBtn: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: '#E8EFF6',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

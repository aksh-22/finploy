import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../Utils/colors';
import {hp, wp} from '../../Theme/Dimensions';
import styles from './styles';
import CheckBox from '../../components/smallcheckbox';
import Colors from '../../Theme/Colors';

type Props = {};

const SearchJobBox = (props: Props) => {
  return (
    <View
      style={{
        backgroundColor: colors.lightGray,
        margin: 20,
        padding: 5,
      }}>
      <Text style={styles.text}>Search Jobs</Text>
      <View style={styles.keyword}>
        <Image
          source={require('../../Assets/searchIcon.png')}
          style={{margin: 5}}
          resizeMode="contain"
        />
        <TextInput
          placeholder="Keyword"
          placeholderTextColor={Colors.Grey}
          style={{flex: 1}}
        />
      </View>
      <TouchableOpacity style={styles.searchButton}>
        <Image
          source={require('../../Assets/searchIcon.png')}
          style={{width: wp('6'), height: hp('3')}}
          resizeMode="contain"
        />
        <Text style={{color: Colors.white, marginLeft: 10}}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#EFF5FB',
          margin: 10,
        }}>
        <Text style={styles.advanceSearchText}>Advance search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.borderButton}>
        <Text style={{color: '#4EA647'}}>Save Search as Alert</Text>
      </TouchableOpacity>
      <View style={styles.urgentButton}>
        <CheckBox />
        <Text style={{color: 'white', marginLeft: 5}}>
          Only Urgent Requirements
        </Text>
      </View>
    </View>
  );
};

export default SearchJobBox;

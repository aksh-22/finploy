import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

//Icons
import MenuIcon from '../Assets/Svg/MenuIcon.svg';
import Colors from '../Theme/Allcolors';
import {hp} from '../Theme/Dimensions';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

export default function HeaderBar(props) {
  const navigation = useNavigation();
  const userData = useSelector(state => state.persistedReducer.preference);

  return (
    <View style={styles.headerContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.hasOwnProperty('openDrawer')
              ? props.navigation.openDrawer()
              : navigation.goBack();
          }}>
          <MenuIcon style={{margin: 5}} />
        </TouchableOpacity>
        <Image
          source={require('../Assets/HeaderLogo.png')}
          style={{width: 137, height: 32}}
        />
      </View>

      <View>
        <Image
          // source={require('../Assets/Profile.png')}
          source={{uri: userData?.profilePic}}
          resizeMode="contain"
          style={{
            width: 40,
            height: 40,
            borderRadius: 100,
            backgroundColor: '#E8EFF6',
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    height: hp(9),
    alignItems: 'center',
  },
});

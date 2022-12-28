import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

//Icons
import MenuIcon from '../Assets/Svg/MenuIcon.svg';
import Colors from '../Theme/Allcolors';
import {hp} from '../Theme/Dimensions';
import { useNavigation } from '@react-navigation/native';

export default function Headerpartner(props) {
    const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity 
        // onPress={() => props.navigation.openDrawer()}
        onPress={()=>{navigation.navigate('Menu-p')}}
        >
          <MenuIcon style={{margin: 5}} />
        </TouchableOpacity>
        <Image
          source={require('../Assets/HeaderLogo.png')}
          style={{width: 137, height: 32}}
        />
      </View>

      <View>
        <Image
          source={require('../Assets/Profile.png')}
          resizeMode="contain"
          style={{width: 40, height: 40, borderRadius: 100}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: hp(2),
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    height: hp(9),
    alignItems: 'center',
  },
});

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import {colors} from '../../Utils/colors';
import {Header} from 'react-native-elements';
import LeftIcon from '../../Assets/Svg/LeftIcon.svg';
import LogoutIcon from '../../Assets/Svg/LogoutIcon.svg';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from 'react-native-reanimated';
const CustomerList = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      {/* <Text>hhhh</Text> */}
      <Header
        placement="left"
        leftComponent={
          <LeftIcon
            onPress={() => {
              navigation.goBack();
            }}
          />
        }
        centerComponent={
          <View style={{alignItems: 'center', margin: wp(2.3)}}>
            <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
              {'My Candidate'}
            </Text>
          </View>
        }
        rightComponent={
          <View style={{alignItems: 'center', margin: wp(2.2)}}>
            <LogoutIcon style={{width: wp(6), height: hp(3)}} />
          </View>
        }
        containerStyle={{
          backgroundColor: '#E9E9E9',
          alignContent: 'center',
        }}
      />
      <View style={styles.container}>
        <View style={styles.firstSubContaioner}>
          <Image source={require('../../Assets/image1.png')} />
        </View>

        <View style={styles.secondSubContainer}>
          <Text style={styles.nameText}>Sam Sam</Text>

          <View
            style={[
              styles.container,
              {marginTop: hp('1'), justifyContent: 'space-between'},
            ]}>
            <Text style={styles.secondInnerText}>Partner Id No :</Text>
            <Text style={styles.innerText}>121724</Text>
          </View>

          <View
            style={[
              styles.container,
              {marginTop: hp('1'), justifyContent: 'space-between'},
            ]}>
            <Text style={styles.secondInnerText}>Location</Text>
            <Text style={styles.innerText}>Banglore</Text>
          </View>

          <View
            style={[
              styles.container,
              {marginTop: hp('1'), justifyContent: 'space-between'},
            ]}>
            <Text style={styles.secondInnerText}>Total Candidates :</Text>
            <Text style={styles.innerText}>60</Text>
          </View>

          <View
            style={[
              styles.container,
              {marginTop: hp('1'), justifyContent: 'space-between'},
            ]}>
            <Text style={styles.secondInnerText}>Total Earning :</Text>
            <Text style={styles.innerText}>2 78 000</Text>
          </View>
          <FloatingButton
            title={'Share Link'}
            width={wp('32.2')}
            mt={hp('1')}
            onpress={() => {
              navigation.navigate('Landing');
            }}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: hp('2.5'),
          backgroundColor: colors.rowBg,
          paddingVertical: 10,
        }}>
        <View style={{flex: 4.8}}>
          <Text style={{fontWeight: 'bold', paddingLeft: wp('5.2')}}>
            Customer List
          </Text>
        </View>

        <View style={{flex: 2}}>
          <Text style={{color: colors.blue, textAlign: 'center'}}>Applied</Text>
        </View>

        <View style={{flex: 2}}>
          <Text style={{color: colors.green}}>Selected</Text>
        </View>

        <View style={{flex: 1.2, paddingRight: wp('2.2')}}>
          <Text>Earning</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: wp('2.2'),
          marginTop: hp('2.5'),
        }}>
        <View style={{flex: 3, flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{height: hp('2'), width: wp('4'), borderRadius: 25}}
            source={require('../../Assets/image1.png')}
          />
          <View style={{marginLeft: wp('1.1')}}>
            <Text style={{fontWeight: 'bold'}}>Jacob Jones</Text>
            <Text style={{color: colors.gray}}>ID: 539724</Text>
          </View>
        </View>
        <View style={{flex: 1.8}}>
          <Text style={{color: colors.gray}}>05/5/22</Text>
          <Text style={{color: colors.gray}}>10/8/21</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={{color: colors.blue}}>10 00 000</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={{color: colors.green}}>7 00 000</Text>
        </View>
        <View style={{flex: 1.2}}>
          <Text
            style={{
              backgroundColor: colors.rowBg,
              textAlign: 'center',
              paddingHorizontal: 5,
              paddingVertical: 8,
              borderRadius: 4,
            }}>
            2000
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: wp('2.2'),
          marginTop: hp('2.5'),
        }}>
        <View style={{flex: 3, flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{height: hp('2'), width: wp('4'), borderRadius: 25}}
            source={require('../../Assets/image1.png')}
          />
          <View style={{marginLeft: wp('1.1')}}>
            <Text style={{fontWeight: 'bold'}}>Jacob Jones</Text>
            <Text style={{color: colors.gray}}>ID: 539724</Text>
          </View>
        </View>
        <View style={{flex: 1.8}}>
          <Text style={{color: colors.gray}}>05/5/22</Text>
          <Text style={{color: colors.gray}}>10/8/21</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={{color: colors.blue}}>10 00 000</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={{color: colors.green}}>7 00 000</Text>
        </View>
        <View style={{flex: 1.2}}>
          <Text
            style={{
              backgroundColor: colors.rowBg,
              textAlign: 'center',
              paddingHorizontal: 5,
              paddingVertical: 8,
              borderRadius: 4,
            }}>
            2000
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: wp('2.2'),
          marginTop: hp('2.5'),
        }}>
        <View style={{flex: 3, flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{height: hp('2'), width: wp('4'), borderRadius: 25}}
            source={require('../../Assets/image1.png')}
          />
          <View style={{marginLeft: wp('1.1')}}>
            <Text style={{fontWeight: 'bold'}}>Jacob Jones</Text>
            <Text style={{color: colors.gray}}>ID: 539724</Text>
          </View>
        </View>
        <View style={{flex: 1.8}}>
          <Text style={{color: colors.gray}}>05/5/22</Text>
          <Text style={{color: colors.gray}}>10/8/21</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={{color: colors.blue}}>10 00 000</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={{color: colors.green}}>7 00 000</Text>
        </View>
        <View style={{flex: 1.2}}>
          <Text
            style={{
              backgroundColor: colors.rowBg,
              textAlign: 'center',
              paddingHorizontal: 5,
              paddingVertical: 8,
              borderRadius: 4,
            }}>
            2000
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: wp('2.2'),
          marginTop: hp('2.5'),
        }}>
        <View style={{flex: 3, flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{height: hp('2'), width: wp('4'), borderRadius: 25}}
            source={require('../../Assets/image1.png')}
          />
          <View style={{marginLeft: wp('1.1')}}>
            <Text style={{fontWeight: 'bold'}}>Jacob Jones</Text>
            <Text style={{color: colors.gray}}>ID: 539724</Text>
          </View>
        </View>
        <View style={{flex: 1.8}}>
          <Text style={{color: colors.gray}}>05/5/22</Text>
          <Text style={{color: colors.gray}}>10/8/21</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={{color: colors.blue}}>10 00 000</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={{color: colors.green}}>7 00 000</Text>
        </View>
        <View style={{flex: 1.2}}>
          <Text
            style={{
              backgroundColor: colors.rowBg,
              textAlign: 'center',
              paddingHorizontal: 5,
              paddingVertical: 8,
              borderRadius: 4,
            }}>
            2000
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: wp('2.2'),
          marginTop: hp('2.5'),
        }}>
        <View style={{flex: 3, flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{height: hp('2'), width: wp('4'), borderRadius: 25}}
            source={require('../../Assets/image1.png')}
          />
          <View style={{marginLeft: wp('1.1')}}>
            <Text style={{fontWeight: 'bold'}}>Jacob Jones</Text>
            <Text style={{color: colors.gray}}>ID: 539724</Text>
          </View>
        </View>
        <View style={{flex: 1.8}}>
          <Text style={{color: colors.gray}}>05/5/22</Text>
          <Text style={{color: colors.gray}}>10/8/21</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={{color: colors.blue}}>10 00 000</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={{color: colors.green}}>7 00 000</Text>
        </View>
        <View style={{flex: 1.2}}>
          <Text
            style={{
              backgroundColor: colors.rowBg,
              textAlign: 'center',
              paddingHorizontal: 5,
              paddingVertical: 8,
              borderRadius: 4,
            }}>
            2000
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: wp('2.2'),
          marginTop: hp('2.5'),
        }}>
        <View style={{flex: 3, flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{height: hp('2'), width: wp('4'), borderRadius: 25}}
            source={require('../../Assets/image1.png')}
          />
          <View style={{marginLeft: wp('1.1')}}>
            <Text style={{fontWeight: 'bold'}}>Jacob Jones</Text>
            <Text style={{color: colors.gray}}>ID: 539724</Text>
          </View>
        </View>
        <View style={{flex: 1.8}}>
          <Text style={{color: colors.gray}}>05/5/22</Text>
          <Text style={{color: colors.gray}}>10/8/21</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={{color: colors.blue}}>10 00 000</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={{color: colors.green}}>7 00 000</Text>
        </View>
        <View style={{flex: 1.2}}>
          <Text
            style={{
              backgroundColor: colors.rowBg,
              textAlign: 'center',
              paddingHorizontal: 5,
              paddingVertical: 8,
              borderRadius: 4,
            }}>
            2000
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: wp('2.2'),
          marginTop: hp('2.5'),
        }}>
        <View style={{flex: 3, flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{height: hp('2'), width: wp('4'), borderRadius: 25}}
            source={require('../../Assets/image1.png')}
          />
          <View style={{marginLeft: wp('1.1')}}>
            <Text style={{fontWeight: 'bold'}}>Jacob Jones</Text>
            <Text style={{color: colors.gray}}>ID: 539724</Text>
          </View>
        </View>
        <View style={{flex: 1.8}}>
          <Text style={{color: colors.gray}}>05/5/22</Text>
          <Text style={{color: colors.gray}}>10/8/21</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={{color: colors.blue}}>10 00 000</Text>
        </View>
        <View style={{flex: 2}}>
          <Text style={{color: colors.green}}>7 00 000</Text>
        </View>
        <View style={{flex: 1.2}}>
          <Text
            style={{
              backgroundColor: colors.rowBg,
              textAlign: 'center',
              paddingHorizontal: 5,
              paddingVertical: 8,
              borderRadius: 4,
            }}>
            2000
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: hp(4),
  },
  firstSubContaioner: {
    flex: 0.5,
    alignItems: 'center',
  },
  secondSubContainer: {
    flex: 0.5,
    marginRight: wp('6'),
  },
  nameText: {
    fontWeight: 'bold',
    marginBottom: hp('.6'),
    marginTop: hp(1.3),
    color: 'black',
  },
  innerText: {
    textAlign: 'right',
    color: 'black',
  },
  secondInnerText: {
    color: colors.gray,
  },
});

export default CustomerList;

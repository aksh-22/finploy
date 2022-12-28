import {useState} from 'react';
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
const MyCandidates = () => {
  const [flag, setFlag] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor: 'white'}}>
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
      <View style={{backgroundColor: 'white', marginTop: hp(4)}}>
        {/* <Text>hhhh</Text> */}

        <View style={styles.container}>
          <View style={styles.firstSubContaioner}>
            <Image source={require('../../Assets/image1.png')} />
            <FloatingButton title={'Share Link'} width={'50%'} mt={8} />
          </View>

          <View style={styles.secondSubContainer}>
            <Text style={styles.nameText}>Sam Sam</Text>

            <View
              style={[
                styles.container,
                {marginTop: hp(1), justifyContent: 'space-between'},
              ]}>
              <Text style={styles.secondInnerText}>Partner Id No :</Text>
              <Text style={styles.innerText}>121724</Text>
            </View>

            <View
              style={[
                styles.container,
                {marginTop: hp(1), justifyContent: 'space-between'},
              ]}>
              <Text style={styles.secondInnerText}>Location</Text>
              <Text style={styles.innerText}>Banglore</Text>
            </View>

            <View
              style={[
                styles.container,
                {marginTop: hp(1), justifyContent: 'space-between'},
              ]}>
              <Text style={styles.secondInnerText}>Total Candidates :</Text>
              <Text style={styles.innerText}>60</Text>
            </View>

            <View
              style={[
                styles.container,
                {marginTop: hp(1), justifyContent: 'space-between'},
              ]}>
              <Text style={styles.secondInnerText}>Total Earning :</Text>
              <Text style={styles.innerText}>2 78 000</Text>
            </View>
          </View>
        </View>

        <View style={[styles.container, {marginTop: hp(3)}]}>
          <TouchableOpacity style={{flex: 0.5}} onPress={() => setFlag(true)}>
            <Text
              style={
                flag == true
                  ? {
                      textAlign: 'center',
                      color: colors.blue,
                      fontWeight: 'bold',
                      borderColor: colors.blue,
                      borderWidth: 1,
                      paddingVertical: hp(0.6),
                    }
                  : {
                      color: 'black',
                      textAlign: 'center',
                      paddingVertical: hp(0.6),
                      backgroundColor: colors.rowBg,
                    }
              }>
              Direct Candidates
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 0.5}} onPress={() => setFlag(false)}>
            <Text
              style={
                flag == false
                  ? {
                      textAlign: 'center',
                      color: colors.blue,
                      fontWeight: 'bold',
                      borderColor: colors.blue,
                      borderWidth: 1,
                      paddingVertical: hp(0.6),
                    }
                  : {
                      color: 'black',
                      textAlign: 'center',
                      paddingVertical: hp(0.6),
                      backgroundColor: colors.rowBg,
                    }
              }>
              Indirect Candidates
            </Text>
          </TouchableOpacity>
        </View>

        {flag == false ? (
          <View style={{backgroundColor: 'white'}}>
            <View
              style={{
                marginTop: hp(2.5),
                flexDirection: 'row',
                marginHorizontal: wp(6),
                alignItems: 'center',
              }}>
              <View
                style={{flex: 0.5, flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{height: 16, width: 16, borderRadius: 25}}
                  source={require('../../Assets/image1.png')}
                />
                <View style={{marginLeft: wp(2)}}>
                  <Text style={{fontWeight: 'bold'}}>Jacob Jones</Text>
                  <Text style={{color: colors.gray}}>ID: 539724</Text>
                </View>
              </View>

              <View style={{flex: 0.2}}>
                <Text style={{textAlign: 'center'}}>2400</Text>
              </View>

              <TouchableOpacity
                style={{
                  flex: 0.3,
                  backgroundColor: colors.primaryGeen,
                  paddingVertical: hp(0.6),
                  borderRadius: 4,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  Acepted
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: hp(2.5),
                flexDirection: 'row',
                marginHorizontal: wp(6),
                alignItems: 'center',
              }}>
              <View
                style={{flex: 0.5, flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{height: 16, width: 16, borderRadius: 25}}
                  source={require('../../Assets/image1.png')}
                />
                <View style={{marginLeft: wp(2)}}>
                  <Text style={{fontWeight: 'bold'}}>Jacob Jones</Text>
                  <Text style={{color: colors.gray}}>ID: 539724</Text>
                </View>
              </View>

              <View style={{flex: 0.2}}>
                <Text style={{textAlign: 'center'}}>2400</Text>
              </View>

              <TouchableOpacity
                style={{
                  flex: 0.3,
                  backgroundColor: 'transparent',
                  paddingVertical: hp(0.6),
                  borderRadius: 4,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'grey',
                    borderWidth: 1,
                    borderColor: 'lightblue',
                  }}>
                  Rejected
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: hp(2.5),
                flexDirection: 'row',
                marginHorizontal: wp(6),
                alignItems: 'center',
              }}>
              <View
                style={{flex: 0.5, flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{height: 16, width: 16, borderRadius: 25}}
                  source={require('../../Assets/image1.png')}
                />
                <View style={{marginLeft: wp(2)}}>
                  <Text style={{fontWeight: 'bold'}}>Jacob Jones</Text>
                  <Text style={{color: colors.gray}}>ID: 539724</Text>
                </View>
              </View>

              <View style={{flex: 0.2}}>
                <Text style={{textAlign: 'center'}}>2400</Text>
              </View>

              <TouchableOpacity
                style={{
                  flex: 0.3,
                  backgroundColor: colors.orange,
                  paddingVertical: hp(0.6),
                  borderRadius: 4,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  Pending
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: hp(2.5),
                flexDirection: 'row',
                marginHorizontal: wp(6),
                alignItems: 'center',
              }}>
              <View
                style={{flex: 0.5, flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{height: 16, width: 16, borderRadius: 25}}
                  source={require('../../Assets/image1.png')}
                />
                <View style={{marginLeft: wp(2)}}>
                  <Text style={{fontWeight: 'bold'}}>Jacob Jones</Text>
                  <Text style={{color: colors.gray}}>ID: 539724</Text>
                </View>
              </View>

              <View style={{flex: 0.2}}>
                <Text style={{textAlign: 'center'}}>2400</Text>
              </View>

              <TouchableOpacity
                style={{
                  flex: 0.3,
                  backgroundColor: colors.primaryGeen,
                  paddingVertical: hp(0.6),
                  borderRadius: 4,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  Acepted
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: hp(2.5),
                flexDirection: 'row',
                marginHorizontal: wp(6),
                alignItems: 'center',
              }}>
              <View
                style={{flex: 0.5, flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{height: 16, width: 16, borderRadius: 25}}
                  source={require('../../Assets/image1.png')}
                />
                <View style={{marginLeft: wp(2)}}>
                  <Text style={{fontWeight: 'bold'}}>Jacob Jones</Text>
                  <Text style={{color: colors.gray}}>ID: 539724</Text>
                </View>
              </View>

              <View style={{flex: 0.2}}>
                <Text style={{textAlign: 'center'}}>2400</Text>
              </View>

              <TouchableOpacity
                style={{
                  flex: 0.3,
                  backgroundColor: colors.primaryGeen,
                  paddingVertical: hp(0.6),
                  borderRadius: 4,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  Acepted
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: hp(2.5),
                flexDirection: 'row',
                marginHorizontal: wp(6),
                alignItems: 'center',
                backgroundColor: 'white',
              }}>
              <View
                style={{flex: 0.5, flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{height: 16, width: 16, borderRadius: 25}}
                  source={require('../../Assets/image1.png')}
                />
                <View style={{marginLeft: wp(2)}}>
                  <Text style={{fontWeight: 'bold'}}>Jacob Jones</Text>
                  <Text style={{color: colors.gray}}>ID: 539724</Text>
                </View>
              </View>

              <View style={{flex: 0.2}}>
                <Text style={{textAlign: 'center'}}>2400</Text>
              </View>

              <TouchableOpacity
                style={{
                  flex: 0.3,
                  backgroundColor: colors.orange,
                  paddingVertical: hp(0.6),
                  borderRadius: 4,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  Pending
                </Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                marginHorizontal: wp(4),
                marginVertical: hp(4),
                fontSize: 18,
                color: 'darkgrey',
                textAlign: 'center',
              }}>
              Live staus update every 2 hours
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'white',
                marginHorizontal: wp(8),
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'lightgrey',
                  paddingHorizontal: wp(7),
                  paddingVertical: hp(2),
                }}>
                <Text style={{color: 'black'}}>Refer a Partner</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'lightgrey',
                  paddingHorizontal: wp(5),
                  paddingVertical: hp(2),
                }}>
                <Text style={{color: 'black'}}>Refer a Candidate</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            <View
              style={{
                marginTop: hp(1.2),
                flexDirection: 'row',
                marginHorizontal: wp(6),
                alignItems: 'center',
              }}>
              <View
                style={{flex: 0.5, flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{height: 16, width: 16, borderRadius: 25}}
                  source={require('../../Assets/image1.png')}
                />
                <View style={{marginLeft: wp(2)}}>
                  <Text style={{fontWeight: 'bold'}}>Jacob Jones</Text>
                  <Text style={{color: colors.gray}}>ID: 539724</Text>
                </View>
              </View>

              <View style={{flex: 0.2}}>
                <Text style={{textAlign: 'center'}}>2400</Text>
              </View>

              <TouchableOpacity
                style={{
                  flex: 0.3,
                  backgroundColor: colors.primaryGeen,
                  paddingVertical: hp(0.6),
                  borderRadius: 4,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  Acepted
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: hp(1.2),
                flexDirection: 'row',
                marginHorizontal: wp(6),
                alignItems: 'center',
              }}>
              <View
                style={{flex: 0.5, flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{height: 16, width: 16, borderRadius: 25}}
                  source={require('../../Assets/image1.png')}
                />
                <View style={{marginLeft: wp(2)}}>
                  <Text style={{fontWeight: 'bold'}}>Arlene McCoy</Text>
                  <Text style={{color: colors.gray}}>ID: 539724</Text>
                </View>
              </View>

              <View style={{flex: 0.2}}>
                <Text style={{textAlign: 'center'}}>0</Text>
              </View>

              <TouchableOpacity
                style={{
                  flex: 0.3,
                  backgroundColor: colors.orange,
                  paddingVertical: hp(0.6),
                  borderRadius: 4,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  Pending
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: hp(1.2),
                flexDirection: 'row',
                marginHorizontal: wp(6),
                alignItems: 'center',
              }}>
              <View
                style={{flex: 0.5, flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{height: 16, width: 16, borderRadius: 25}}
                  source={require('../../Assets/image1.png')}
                />
                <View style={{marginLeft: wp(2)}}>
                  <Text style={{fontWeight: 'bold'}}>Arlene McCoy</Text>
                  <Text style={{color: colors.gray}}>ID: 539724</Text>
                </View>
              </View>

              <View style={{flex: 0.2}}>
                <Text style={{textAlign: 'center'}}>20000</Text>
              </View>

              <TouchableOpacity
                style={{
                  flex: 0.3,
                  paddingVertical: hp(0.6),
                  borderRadius: 4,
                  borderColor: colors.borderColor,
                  borderWidth: 2,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: colors.borderColor,
                  }}>
                  Rejected
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: hp(1.2),
                flexDirection: 'row',
                marginHorizontal: wp(6),
                alignItems: 'center',
              }}>
              <View
                style={{flex: 0.5, flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{height: 16, width: 16, borderRadius: 25}}
                  source={require('../../Assets/image1.png')}
                />
                <View style={{marginLeft: wp(2)}}>
                  <Text style={{fontWeight: 'bold'}}>Jacob Jones</Text>
                  <Text style={{color: colors.gray}}>ID: 539724</Text>
                </View>
              </View>

              <View style={{flex: 0.2}}>
                <Text style={{textAlign: 'center'}}>2400</Text>
              </View>

              <TouchableOpacity
                style={{
                  flex: 0.3,
                  backgroundColor: colors.primaryGeen,
                  paddingVertical: hp(0.6),
                  borderRadius: 4,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  Acepted
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  firstSubContaioner: {
    flex: 0.5,
    alignItems: 'center',
  },
  secondSubContainer: {
    flex: 0.5,
    marginRight: 24,
  },
  nameText: {
    fontWeight: 'bold',
    marginBottom: 6,
    marginTop: 11,
  },
  innerText: {
    textAlign: 'right',
  },
  secondInnerText: {
    color: colors.gray,
  },
  plus: {
    fontSize: 30,
    marginLeft: 5,
  },
});

export default MyCandidates;

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useEffect} from 'react';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';

import CircularProgress from 'react-native-circular-progress-indicator';

import CopyIcon from '../../Assets/Svg/CopyIcon.svg';
import Colors from '../../Theme/Colors';
import {wp} from '../../Theme/Dimensions';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import EndPoints from '../../Utils/EndPoints';
import {RequestAPIAction} from '../../Utils/Config';
import {storeUserDetails} from '../../redux/creators/AuthCreators';

export default function Home(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const token = useSelector(state => state.persistedReducer.token);
  const userData = useSelector(state => state.persistedReducer.preference);

  useEffect(() => {
    const getCandidateProfile = async () => {
      if (token) {
        const result = await RequestAPIAction(
          EndPoints.user.getProfile,
          'GET',
          null,
          token,
        );
        if (result.code === 200 || result.code === 201) {
          dispatch(storeUserDetails(result.response.data));
        }
      }
    };
    getCandidateProfile();
    return () => {
      console.log('This is getUserProfile request');
    };
  }, []);

  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView>
        <SearchBar onPress={() => props.navigation.navigate('AllJobsScreen')} />
        {/* Refer a friend Card */}
        <View style={styles.referAFriend}>
          <View>
            <Text style={styles.referCardHeader}>REFER-A-FRIEND</Text>
            <Text style={{fontSize: 16, color: 'black', marginVertical: 10}}>
              And get rewarded
            </Text>
          </View>
          <View style={{justifyContent: 'flex-end'}}>
            <TouchableOpacity
              style={{
                paddingVertical: 8,
                paddingHorizontal: 15,
                backgroundColor: '#E8EFF6',
                borderRadius: 5,
              }}>
              <Text>Get Your Personal Link</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Refer & Earn Card */}
        <View style={styles.referAFriend}>
          <View>
            <Text style={styles.referCardHeader}>{'REFER & EARN'}</Text>
            <Text style={{fontSize: 16, color: 'black', marginVertical: 10}}>
              {'Upto $15000 Usd per\nhour'}
            </Text>
          </View>
          <View style={{justifyContent: 'flex-end'}}>
            <TouchableOpacity
              style={{
                paddingVertical: 8,
                paddingHorizontal: 15,
                backgroundColor: '#E8EFF6',
                borderRadius: 5,
              }}>
              <Text>Join as a partner</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Save Your Job Card */}
        <View style={styles.saveYourJob}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.referCardHeader}>{'Save Your Job Search'}</Text>
            <TextInput
              placeholder="Enter Name"
              placeholderTextColor={'gray'}
              style={{
                borderWidth: 0.5,
                borderColor: Colors.Grey,
                paddingVertical: 5,
                paddingHorizontal: 10,
                width: wp(40),
              }}
            />
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                marginVertical: 10,
                alignSelf: 'flex-end',
              }}>
              {'Receive Alerts\nReceive email alerts\nwith new matching job.'}
            </Text>
            <TouchableOpacity
              style={{
                paddingVertical: 8,
                paddingHorizontal: 15,
                alignSelf: 'flex-end',
                backgroundColor: '#E8EFF6',
                borderRadius: 5,
              }}>
              <Text>Save Alert</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/*  */}
        <View
          style={{
            flexDirection: 'row',
            margin: 10,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              height: 80,
              borderWidth: 1,
              borderColor: '#E9E9E9',
              flex: 1,
            }}>
            <View
              style={{
                height: 40,
                flexDirection: 'row',
                paddingHorizontal: 10,
                alignItems: 'center',
                backgroundColor: '#E8EFF6',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontWeight: 'bold'}}>{'Profile Link'}</Text>
              <TouchableOpacity>
                <CopyIcon />
              </TouchableOpacity>
            </View>

            <View style={{padding: 10}}>
              <TouchableOpacity>
                <Text style={{color: '#175DA8'}}>{'https://finoploy.com'}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View width={5} />
          <View
            style={{
              height: 80,
              borderWidth: 1,
              borderColor: '#E9E9E9',
              flex: 1,
            }}>
            <View
              style={{
                height: 40,
                flexDirection: 'row',
                paddingHorizontal: 10,
                alignItems: 'center',
                backgroundColor: '#E8EFF6',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontWeight: 'bold'}}>{'Location'}</Text>
              <TouchableOpacity>
                <CopyIcon />
              </TouchableOpacity>
            </View>

            <View style={{padding: 10}}>
              <TouchableOpacity>
                <Text style={{color: '#175DA8'}}>{'India'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Circular Progress */}
        <View style={styles.circularProgressContainer}>
          <Text style={{color: 'black', fontSize: 14}}>Profile Complete</Text>
          <View style={{marginVertical: 20}}>
            <CircularProgress value={86} />
          </View>
          <TouchableOpacity
            style={styles.updateProfileBtn}
            onPress={() => {
              // navigation.navigate('ResumeProfileToFill');
              navigation.navigate('AuthStackNavigator', {
                screen: 'ResumeProfileToFill',
              });
            }}>
            <Text style={styles.btnText}>{'Update Profile'}</Text>
          </TouchableOpacity>
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
  referAFriend: {
    height: 113,
    margin: 5,
    padding: 15,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  referCardHeader: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
    lineHeight: 19.36,
  },
  saveYourJob: {
    height: 150,
    margin: 5,
    padding: 15,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    backgroundColor: 'white',
  },
  circularProgressContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    alignItems: 'center',
    padding: 10,
  },
  updateProfileBtn: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#175DA8',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

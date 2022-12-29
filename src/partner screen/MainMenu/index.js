import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Partnertabs from '../../Navigators/PartnerTabs';
import Headerpartner from '../../components/Header-p';

const MainMenu = () => {
  const navigation = useNavigation();

  const RenderMenuItem = ({imageUrl, title}) => {
    return (
      <View style={styles.subContainer}>
        <Image style={{height: 24, width: 24}} source={imageUrl} />
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, height: hp(100), backgroundColor: 'white'}}>
      {/* <View style={{flex:1}}> */}
      <View
        style={{
          backgroundColor: 'white',
          borderBottomColor: '#DDDDDD',
          borderBottomWidth: 1,
          marginTop: hp(1),
        }}>
        <Headerpartner />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 16,
            elevation: 1,
            marginTop: 47,
            backgroundColor: 'white',
          }}>
          <Image
            style={{height: 64, width: 64, borderRadius: 50}}
            source={require('../../Assets/image1.png')}
          />
          <View style={{marginLeft: 16}}>
            <Text style={{fontSize: 20, color: '#175DA8'}}>Kritika Sharma</Text>
            <Text style={{fontWeight: 'bold'}}>View Profile</Text>
          </View>
        </View>
      </View>
      <ScrollView style={{backgroundColor: 'white', height: hp(100)}}>
        <View style={styles.bottomContainer}>
          <View
            style={[
              styles.subContainer,
              {justifyContent: 'space-between', marginTop: 32},
            ]}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Withdraw-p');
              }}>
              {
                <RenderMenuItem
                  title={'Withdraw Fund'}
                  imageUrl={require('../../Assets/withdraw_fund.png')}
                />
              }
            </TouchableOpacity>

            <View style={styles.subContainer}>
              <Image
                style={{height: hp('3'), width: wp('6')}}
                source={require('../../Assets/dollar.png')}
              />
              <Text style={[styles.title, {marginLeft: 10, marginRight: 30}]}>
                0.00 USD
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Reports-p');
            }}>
            {
              <RenderMenuItem
                title={'My Reports'}
                imageUrl={require('../../Assets/reports.png')}
              />
            }
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomColor: '#DDDDDD',
            borderBottomWidth: 1,
            marginBottom: 16,
          }}
        />

        <View style={{marginLeft: 32}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Jobs-p');
            }}>
            {
              <RenderMenuItem
                title={'Jobs'}
                imageUrl={require('../../Assets/jobs.png')}
              />
            }
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Social-p');
            }}>
            {
              <RenderMenuItem
                title={'Social tools'}
                imageUrl={require('../../Assets/grayShare.png')}
              />
            }
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Tutorials-p');
            }}>
            {
              <RenderMenuItem
                title={'Tutorials'}
                imageUrl={require('../../Assets/Tutorial.png')}
              />
            }
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Recruter-p');
            }}>
            {
              <RenderMenuItem
                title={'Join as Recruiter'}
                imageUrl={require('../../Assets/recrutar.png')}
              />
            }
          </TouchableOpacity>
          <TouchableOpacity
          //          onPress={() => {
          //   navigation.navigate('Customer-p'); }}
          >
            {
              <RenderMenuItem
                title={'Support'}
                imageUrl={require('../../Assets/support.png')}
              />
            }
          </TouchableOpacity>
          <TouchableOpacity
          //         onPress={() => {
          //   navigation.navigate('Referpartner1-p');}}
          >
            {
              <RenderMenuItem
                title={'Log Out'}
                imageUrl={require('../../Assets/logout.png')}
              />
            }
          </TouchableOpacity>
        </View>

        <View style={{paddingLeft: 16, backgroundColor: '#DDDDDD'}}>
          <Text style={{paddingTop: 8, fontWeight: 'bold', fontSize: 16}}>
            Need Help? Call Now:
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 27,
              marginTop: 16,
            }}>
            <Image
              style={{height: 24, width: 24, borderRadius: 25}}
              source={require('../../Assets/flag1.png')}
            />
            <View style={{marginLeft: 20}}>
              <Text style={{fontWeight: 'bold'}}>+1 650 488 5192</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 27,
            }}>
            <Image
              style={{height: 24, width: 24, borderRadius: 25}}
              source={require('../../Assets/flag3.png')}
            />
            <View style={{marginLeft: 20}}>
              <Text style={{fontWeight: 'bold'}}>+1 650 488 5192</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 27,
            }}>
            <Image
              style={{height: 24, width: 24, borderRadius: 25}}
              source={require('../../Assets/flag2.png')}
            />
            <View style={{marginLeft: 20}}>
              <Text style={{fontWeight: 'bold'}}>+1 650 488 5192</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{marginBottom: hp(8)}}>
        <Partnertabs />
      </View>

      {/* </View> */}
    </SafeAreaView>
  );
};

export default MainMenu;

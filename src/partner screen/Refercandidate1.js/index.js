import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import {colors} from '../../Utils/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {Header} from 'react-native-elements';
import LeftIcon from '../../Assets/Svg/LeftIcon.svg';
import LogoutIcon from '../../Assets/Svg/LogoutIcon.svg';
// import { useNavigation } from '@react-navigation/native'
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Refercandidate1 = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: '#E9E9E9'}}>
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
              {'Refer Candidate'}
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
      <Text style={styles.text}>Refer a New Candidate</Text>

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.subText}>
          The Candidate is registered under you sucessfully, Click on any of the
          below.
        </Text>
        <FloatingButton
          title={'Refer another Candidate'}
          width={wp('60')}
          onpress={() => {
            navigation.navigate('Refercandidate-p');
          }}
        />
        <FloatingButton
          title={'Refer a Partner'}
          width={wp('40')}
          mt={40}
          onpress={() => {
            navigation.navigate('Referpartner1-p');
          }}
        />
        <FloatingButton
          title={'My Candidates'}
          width={wp('30')}
          mt={40}
          onpress={() => {
            navigation.navigate('Mycandidates-p');
          }}
        />
        <FloatingButton
          title={'My Dashboard'}
          width={wp('40')}
          mt={40}
          onpress={() => {
            navigation.navigate('Mycandidate-p');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.btnColour,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: wp('1'),
    paddingVertical: hp('1.2'),
    borderRadius: 4,
  },
  text: {
    color: colors.gray,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: hp('5'),
    marginLeft: wp('6'),
  },
  card: {
    backgroundColor: 'white',
    marginHorizontal: 12,
    alignItems: 'center',
    paddingBottom: hp('10'),
    borderRadius: 10,
    marginTop: hp('2.5'),
  },
  subText: {
    padding: 40,
    width: '75%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Refercandidate1;

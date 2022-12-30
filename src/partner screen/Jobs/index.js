import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Questions from '../../components/Questions';
import {colors} from '../../Utils/colors';
import HeaderBar from '../../components/Header';
import {hp, wp} from '../../Theme/Dimensions';
import CheckBox from '../../components/smallcheckbox';
// import Partnertabs from '../../Navigators/partnerStack/PartnerTabs';
// import Headerpartner from '../../components/Header-p';
// import { CheckBoxComponent } from "@react-native-community/checkbox"

const Jobs = () => {
  const RenderItem = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: wp('4.5'),
          marginTop: hp('1'),
        }}>
        <View>
          <Text style={{width: wp('25'), color: colors.blue}}>
            Oracle rmb con......
          </Text>
          <Text
            style={{
              backgroundColor: colors.cardBg,
              width: wp('20'),
              borderRadius: 20,
              textAlign: 'center',
              color: colors.blue,
              paddingVertical: 3,
              marginTop: hp('1.2'),
            }}>
            Client payroll
          </Text>
        </View>
        <View>
          <Text style={{color: colors.green, fontWeight: 'bold'}}>
            200,00,00 INR
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Image source={require('../../Assets/blueShare.png')} />
          <Image
            style={{marginLeft: wp('6')}}
            source={require('../../Assets/rightArrow.png')}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1, height: hp(100), backgroundColor: 'white'}}>
      {/* <Headerpartner /> */}
      <ScrollView style={{backgroundColor: '#FFFFFF', height: hp(100)}}>
        <View>
          <Card
            headerText={'Jobs'}
            text={
              'Find talents for these jobs and earn upto 75 Crore in commisions'
            }
            url={require('../../Assets/card1.png')}
          />
          <View
            style={{
              backgroundColor: colors.lightGray,
              marginTop: hp('2'),
              marginLeft: wp('4'),
              marginRight: wp('4'),
              height: hp('30'),
            }}>
            <Text style={styles.text}>Search Jobs</Text>
            <View
              style={{
                marginLeft: wp('4'),
                marginRight: wp('4'),
                marginTop: hp('2'),
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                height: hp('4'),
              }}>
              <Image
                source={require('../../Assets/searchIcon.png')}
                style={{width: wp('4'), height: hp('2'), marginLeft: wp('4')}}
              />
              <TextInput
                placeholder="Keyword"
                placeholderTextColor={'black'}
                style={{fontSize: 12}}></TextInput>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: colors.blue,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: hp('4'),
                marginTop: hp('.5'),
                marginLeft: wp('4'),
                marginRight: wp('4'),
              }}>
              <Image
                source={require('../../Assets/searchIcon.png')}
                style={{width: wp('4'), height: hp('2'), marginLeft: wp('4')}}
              />
              <Text>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginLeft: wp('4'),
                marginRight: wp('4'),
                backgroundColor: '#EFF5FB',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: hp('1'),
                  color: colors.blue,
                  marginBottom: hp('1'),
                }}>
                Advance search
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginLeft: wp('4'),
                marginRight: wp('4'),
                backgroundColor: 'white',
                borderColor: '#4EA647',
                borderWidth: 1,
                height: hp('4'),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#4EA647'}}>Save Search as Alert</Text>
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: colors.blue,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: wp('4'),
                marginRight: wp('4'),
                marginTop: hp('1'),
                height: hp('3'),
              }}>
              <CheckBox />
              <Text style={{color: 'white'}}>Only Urgent Requirements</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: wp('4'),
              paddingHorizontal: wp('3'),
              paddingVertical: hp('1.5'),
              backgroundColor: colors.cardBg,
              marginTop: hp('3'),
            }}>
            <View
              style={{
                flex: 0.7,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Rank</Text>
              <Text
                style={{
                  marginLeft: wp('1.9'),
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                Members
              </Text>
            </View>
            <View
              style={{
                flex: 0.4,
                alignItems: 'flex-end',
                marginRight: 20,
                fontWeight: 'bold',
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Earnings</Text>
            </View>
          </View>
          <RenderItem />
          <RenderItem />
          <RenderItem />

          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginLeft: 16,
              marginTop: 48,
            }}>
            FAQ's
          </Text>
          <Questions />
          <Footer />
        </View>
      </ScrollView>
      {/* <View style={{marginBottom: hp(8), backgroundColor: 'white'}}>
        <Partnertabs />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  subContainer: {},
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: wp('4'),
    marginTop: hp('2'),
  },
});
export default Jobs;

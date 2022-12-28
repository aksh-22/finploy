import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import {colors} from '../../Utils/colors';
import {Header} from 'react-native-elements';
import LeftIcon from '../../Assets/Svg/LeftIcon.svg';
import LogoutIcon from '../../Assets/Svg/LogoutIcon.svg';
import {useNavigation} from '@react-navigation/native';
//import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import Partnertabs from '../../Navigators/partnertabs';
// import { ScrollView } from 'react-native-gesture-handler';

const MyPartner = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: 'white', height: hp(100)}}>
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
              {'My Partners'}
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

      <ScrollView style={{height: hp(100)}}>
        <View style={{marginTop: hp(4)}}>
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

          <View style={[styles.container, {marginTop: hp(4)}]}>
            <View style={styles.secondLevelContainer}>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.partnersText}>Number of Partners</Text>
              </View>
              <View style={[styles.container, styles.align]}>
                <Text style={styles.firstSideText}>Direct Partner</Text>
                <Text style={styles.sideText}>8</Text>
              </View>
              <View style={[styles.container, styles.align]}>
                <Text style={styles.firstSideText}>Total Partners</Text>
                <Text style={styles.sideText}>320</Text>
              </View>
            </View>
            <View style={styles.verticleLine}></View>

            <View style={styles.secondLevelContainer}>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.partnersText}>Commision Earned</Text>
              </View>
              <View style={[styles.container, styles.align]}>
                <Text style={styles.firstSideText}>Direct fee earned</Text>
                <Text style={styles.commisionText}>2400</Text>
              </View>
              <View style={[styles.container, styles.align]}>
                <Text style={styles.firstSideText}>Total fee earned</Text>
                <Text style={styles.commisionText}>8400</Text>
              </View>
            </View>
          </View>

          {/* remove */}
          <View style={styles.rowMainContainer}>
            <View style={styles.rowContainer}>
              <Text style={styles.plus}>+</Text>
              <Text style={styles.names}>Ralph Edwards</Text>
              <Text style={{fontWeight: 'bold'}}>(5)</Text>
            </View>

            <View style={styles.rowSecondContainer}>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text style={styles.grayText}>Par. Id: </Text>
                <Text style={styles.grayText}>1241204</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text style={styles.grayText}>Pune</Text>
                <Text style={[styles.grayText, {marginLeft: wp('3')}]}>23</Text>
              </View>
            </View>

            <View style={styles.rowThirdContainer}>
              <Text style={{color: colors.green}}>1000 000</Text>
              <Text style={{color: colors.blue}}>1000 000</Text>
            </View>
          </View>

          <View style={styles.rowMainContainer}>
            <View style={styles.rowContainer}>
              <Text style={styles.plus}>+</Text>
              <Text style={styles.names}>Ralph Edwards</Text>
              <Text style={{fontWeight: 'bold'}}>(5)</Text>
            </View>

            <View style={styles.rowSecondContainer}>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text style={styles.grayText}>Par. Id: </Text>
                <Text style={styles.grayText}>1241204</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text style={styles.grayText}>Pune</Text>
                <Text style={[styles.grayText, {marginLeft: wp('3')}]}>23</Text>
              </View>
            </View>

            <View style={styles.rowThirdContainer}>
              <Text style={{color: colors.green}}>1000 000</Text>
              <Text style={{color: colors.blue}}>1000 000</Text>
            </View>
          </View>

          <View style={styles.rowMainContainer}>
            <View style={styles.rowContainer}>
              <Text style={styles.plus}>+</Text>
              <Text style={styles.names}>Ralph Edwards</Text>
              <Text style={{fontWeight: 'bold'}}>(5)</Text>
            </View>

            <View style={styles.rowSecondContainer}>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text style={styles.grayText}>Par. Id: </Text>
                <Text style={styles.grayText}>1241204</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text style={styles.grayText}>Pune</Text>
                <Text style={[styles.grayText, {marginLeft: wp('3')}]}>23</Text>
              </View>
            </View>

            <View style={styles.rowThirdContainer}>
              <Text style={{color: colors.green}}>1000 000</Text>
              <Text style={{color: colors.blue}}>1000 000</Text>
            </View>
          </View>

          <View style={styles.rowMainContainer}>
            <View style={styles.rowContainer}>
              <Text style={styles.plus}>+</Text>
              <Text style={styles.names}>Ralph Edwards</Text>
              <Text style={{fontWeight: 'bold'}}>(5)</Text>
            </View>

            <View style={styles.rowSecondContainer}>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text style={styles.grayText}>Par. Id: </Text>
                <Text style={styles.grayText}>1241204</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text style={styles.grayText}>Pune</Text>
                <Text style={[styles.grayText, {marginLeft: wp('3')}]}>23</Text>
              </View>
            </View>

            <View style={styles.rowThirdContainer}>
              <Text style={{color: colors.green}}>1000 000</Text>
              <Text style={{color: colors.blue}}>1000 000</Text>
            </View>
          </View>

          <View style={styles.rowMainContainer}>
            <View style={styles.rowContainer}>
              <Text style={styles.plus}>+</Text>
              <Text style={styles.names}>Ralph Edwards</Text>
              <Text style={{fontWeight: 'bold'}}>(5)</Text>
            </View>

            <View style={styles.rowSecondContainer}>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text style={styles.grayText}>Par. Id: </Text>
                <Text style={styles.grayText}>1241204</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text style={styles.grayText}>Pune</Text>
                <Text style={[styles.grayText, {marginLeft: wp('3')}]}>23</Text>
              </View>
            </View>

            <View style={styles.rowThirdContainer}>
              <Text style={{color: colors.green}}>1000 000</Text>
              <Text style={{color: colors.blue}}>1000 000</Text>
            </View>
          </View>

          <View style={styles.rowMainContainer}>
            <View style={styles.rowContainer}>
              <Text style={styles.plus}>+</Text>
              <Text style={styles.names}>Ralph Edwards</Text>
              <Text style={{fontWeight: 'bold'}}>(5)</Text>
            </View>

            <View style={styles.rowSecondContainer}>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text style={styles.grayText}>Par. Id: </Text>
                <Text style={styles.grayText}>1241204</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text style={styles.grayText}>Pune</Text>
                <Text style={[styles.grayText, {marginLeft: wp('3')}]}>23</Text>
              </View>
            </View>

            <View style={styles.rowThirdContainer}>
              <Text style={{color: colors.green}}>1000 000</Text>
              <Text style={{color: colors.blue}}>1000 000</Text>
            </View>
          </View>

          <View style={styles.rowMainContainer}>
            <View style={styles.rowContainer}>
              <Text style={styles.plus}>+</Text>
              <Text style={styles.names}>Ralph Edwards</Text>
              <Text style={{fontWeight: 'bold'}}>(5)</Text>
            </View>

            <View style={styles.rowSecondContainer}>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text style={styles.grayText}>Par. Id: </Text>
                <Text style={styles.grayText}>1241204</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text style={styles.grayText}>Pune</Text>
                <Text style={[styles.grayText, {marginLeft: wp('3')}]}>23</Text>
              </View>
            </View>

            <View style={styles.rowThirdContainer}>
              <Text style={{color: colors.green}}>1000 000</Text>
              <Text style={{color: colors.blue}}>1000 000</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* <View style={{marginBottom:hp(8),backgroundColor:'white'}}>
        <Partnertabs/>
        </View> */}
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
    marginRight: wp('6'),
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
  secondLevelContainer: {
    flex: 0.5,
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: colors.gray,
  },
  align: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('2'),
    marginLeft: wp('4'),
    marginRight: wp('4'),
  },
  partnersText: {
    color: colors.gray,
    fontSize: 16,
    textAlign: 'center',
    width: '50%',
    fontWeight: 'bold',
    // marginBottom:15
  },
  sideText: {
    color: colors.blue,
    fontWeight: 'bold',
  },
  firstSideText: {
    fontWeight: 'bold',
    width: '50%',
  },
  commisionText: {
    color: colors.green,
    fontWeight: 'bold',
  },

  //remove
  rowMainContainer: {
    flexDirection: 'row',
    backgroundColor: colors.rowBg,
    marginTop: hp('2.5'),
    padding: 5,
    borderColor: colors.lightGray,
    borderWidth: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:colors.rowBg,
    // marginTop:20,
    flex: 0.6,
  },
  plus: {
    fontSize: 30,
    marginLeft: wp('1'),
  },
  names: {
    fontWeight: 'bold',
    marginHorizontal: wp('4'),
  },
  rowSecondContainer: {
    flex: 0.3,
    // paddingRight: 13
  },
  rowThirdContainer: {
    flex: 0.2,
    alignItems: 'flex-end',
    marginRight: 5,
  },
  grayText: {
    color: colors.gray,
  },
});

export default MyPartner;

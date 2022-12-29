import {useState} from 'react';
import {
  FlatList,
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
import HeaderBar from '../../components/Header';
import Questions from '../../components/Questions';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../../Utils/colors';
import Partnertabs from '../../Navigators/partnerStack/PartnerTabs';
// import Headerpartner from '../../components/Header-p';

const SocialImage = () => {
  const [selected, setSelected] = useState();
  const tabs = [
    {
      id: 1,
      name: 'Getting started',
    },
    {
      id: 2,
      name: 'Social images',
    },
    {
      id: 3,
      name: 'Scripts/Templates',
    },
    {
      id: 4,
      name: 'Linkedin profile finder',
    },
  ];

  const advertice = [
    {
      url: require('../../Assets/1.png'),
    },
    {
      url: require('../../Assets/3.png'),
    },
    {
      url: require('../../Assets/1.png'),
    },
    {
      url: require('../../Assets/3.png'),
    },
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          alignItems: 'center',
          width: '50%',
          borderColor: colors.blue,
          borderWidth: 1,
          paddingVertical: 9,
        }}
        onPress={() => {
          setSelected(true);
        }}>
        <Text style={{color: colors.blue}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderAdvertice = ({item}) => {
    return (
      <View style={{marginTop: 16}}>
        <Image source={item.url} />
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 330,
            right: 0,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={require('../../Assets/heartIcon.png')} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{flex: 1, height: hp(100)}}>
      {/* <Headerpartner /> */}
      <ScrollView style={{backgroundColor: 'white', height: hp('100')}}>
        <View style={{marginTop: hp('4')}}>
          <Card
            headerText={'Social Images'}
            text={
              'Affiliate tools we give to boost up your referrals and earn more'
            }
            url={require('../../Assets/card1.png')}
          />
          <FlatList
            style={{marginTop: hp('4'), marginHorizontal: wp('4')}}
            data={tabs}
            renderItem={renderItem}
            numColumns={2}
          />

          <View
            style={{
              backgroundColor: colors.footerBg,
              paddingVertical: hp('3'),
              paddingHorizontal: wp('4'),
              marginTop: hp('8'),
              marginHorizontal: wp('4'),
            }}>
            <View style={styles.container}>
              <Text style={[styles.inputStyle, {fontWeight: 'bold'}]}>
                Categories...
              </Text>
              <TouchableOpacity>
                <Image source={require('../../Assets/downArrow.png')} />
              </TouchableOpacity>
            </View>
            <View style={[styles.container, {marginTop: hp('2')}]}>
              <Text style={[styles.inputStyle, {fontWeight: 'bold'}]}>
                Sizes
              </Text>
              <TouchableOpacity>
                <Image source={require('../../Assets/downArrow.png')} />
              </TouchableOpacity>
            </View>
            <View style={[styles.container, {marginTop: hp('2')}]}>
              <TextInput
                style={styles.inputStyle}
                autoCorrect={false}
                placeholder="Search Image"
              />
              <Image source={require('../../Assets/searchIcon.png')} />
            </View>
          </View>
          <FlatList data={advertice} renderItem={renderAdvertice} />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginLeft: wp('4'),
              marginTop: hp('6'),
              color: 'black',
            }}>
            FAQ's
          </Text>
          <Questions />
          <Footer />
        </View>
      </ScrollView>
      <View style={{marginBottom: hp(8), backgroundColor: 'white'}}>
        <Partnertabs />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: wp('6'),
    paddingVertical: hp('2.1'),
  },
  inputStyle: {
    flex: 1,
    // backgroundColor:'red',
  },
});
export default SocialImage;

import {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Footer from '../../components/Footer';
import Questions from '../../components/Questions';
import Partnertabs from '../../Navigators/partnerStack/PartnerTabs';
import {colors} from '../../Utils/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import HeaderBar from '../../components/Header';
// import Headerpartner from '../../components/Header-p';

const Withdraw = () => {
  const [selected, setSelected] = useState(false);
  const RadioButton = ({onPress}) => {
    return (
      <View style={{alignItems: 'center', flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            height: 16,
            width: 16,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: colors.gray,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={onPress}>
          {selected ? (
            <View
              style={{
                height: 8,
                width: 8,
                borderRadius: 6,
                backgroundColor: colors.blue,
              }}
            />
          ) : (
            <View
              style={{
                height: 8,
                width: 8,
                borderRadius: 6,
              }}
            />
          )}
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{flex: 1, height: hp(100)}}>
      {/* <Headerpartner /> */}
      <ScrollView style={{height: hp(100)}}>
        <View>
          <View style={styles.subContainer}>
            <Text style={styles.fundText}>Total Fund</Text>
            <Text style={{fontWeight: 'bold'}}>Current balance</Text>
          </View>

          <Text style={styles.usdText}>$ 0.00 USD</Text>

          <View
            style={{
              backgroundColor: colors.cardBg,
              paddingHorizontal: 16,
              paddingVertical: 24,
              borderRadius: 8,
              marginTop: 32,
              marginHorizontal: 16,
            }}>
            <Text style={styles.WithdrawText}>Withdraw</Text>
            <Text style={styles.text}>Entere withdraw amount</Text>

            <View style={{flexDirection: 'row', marginTop: hp(2)}}>
              <View
                style={[styles.container, {backgroundColor: colors.darkGray}]}>
                <Image source={require('../../Assets/doller.png')} />
                <TextInput
                  style={styles.inputStyle}
                  autoCorrect={false}
                  placeholder="Enter Amount"
                />
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.green,
                  paddingHorizontal: wp(6),
                  paddingVertical: hp(1.5),
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 16,
                    marginTop: 8,
                  }}>
                  USD
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.btn}>Withdraw</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              borderWidth: 1,
              borderColor: colors.darkGray,
              paddingHorizontal: wp(4),
              marginTop: hp(4),
              paddingVertical: hp(3),
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Other Payment Options
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: wp(4),
                marginTop: hp(3),
              }}>
              <RadioButton onPress={() => setSelected(true)} />
              <Image
                style={{marginLeft: wp(4)}}
                source={require('../../Assets/paytm.png')}
              />

              <View style={{marginLeft: wp(6), width: wp('70')}}>
                <Text style={{fontWeight: 'bold'}}>Paytm (Recommended)</Text>
                <Text>Can take upto 5% of your money and 5 workingday</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 16,
              }}>
              <RadioButton onPress={() => setSelected(true)} />
              <Image
                style={{marginLeft: 16}}
                source={require('../../Assets/stripe.png')}
              />

              <View style={{marginLeft: wp(6), width: wp(70)}}>
                <Text style={{fontWeight: 'bold'}}>Stripe</Text>
                <Text>Can take upto 5% of your money and 5 workingday</Text>
              </View>
            </View>
          </View>

          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginLeft: wp(4),
              marginTop: hp(6),
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
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(8.2),
    marginHorizontal: wp(4),
  },
  fundText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  usdText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.green,
    textAlign: 'right',
    marginTop: hp(2),
    marginHorizontal: wp(4),
  },
  WithdrawText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: colors.blue,
  },
  text: {
    fontWeight: 'bold',
    marginTop: hp(2),
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: wp(2),
    paddingVertical: hp(2),
    flex: 1,
  },
  inputStyle: {
    marginLeft: wp(2.5),
  },
  btn: {
    backgroundColor: colors.green,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    paddingVertical: hp(2.2),
    borderRadius: 4,
    marginTop: hp(3),
    fontSize: 16,
  },
});
export default Withdraw;

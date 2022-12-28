import {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FloatingButton from '../components/FloatingButton';
import {colors} from '../Utils/colors';
import {useNavigation} from '@react-navigation/native';
import {Header} from 'react-native-elements';
import LeftIcon from '../Assets/Svg/LeftIcon.svg';
import LogoutIcon from '../Assets/Svg/LogoutIcon.svg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Referpartner1 = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(false);
  const RadioButton = ({text, onPress}) => {
    return (
      <View style={[styles.container, {alignItems: 'center'}]}>
        <TouchableOpacity
          style={{
            height: hp(2),
            width: wp(4),
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
                height: hp('1'),
                width: wp('2'),
                borderRadius: 6,
                backgroundColor: colors.blue,
              }}
            />
          ) : (
            <View
              style={{
                height: hp(1),
                width: wp(2),
                borderRadius: 6,
              }}
            />
          )}
        </TouchableOpacity>
        <Text style={{fontSize: 16, marginLeft: wp('2.2')}}>{text}</Text>
      </View>
    );
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
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
              {'Refer Partner'}
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
      <View style={{marginTop: hp(4), marginHorizontal: 19}}>
        <Text style={styles.text}>Refer a New Partner</Text>

        <View style={[styles.subContainer, styles.mt]}>
          <Text style={styles.nameText}>Partner Name</Text>
          <Text style={styles.smallCard}>Anil Sharma</Text>
        </View>

        <View style={styles.subContainer}>
          <Text style={styles.nameText}>Mobile number</Text>
          <View style={styles.container}>
            <Text style={styles.blueBg}>+91</Text>
            <Text style={styles.numBox}>9595959595</Text>
          </View>
        </View>

        <View style={styles.subContainer}>
          <Text style={styles.nameText}>Whatsapp</Text>
          <View style={styles.container}>
            <Text style={styles.blueBg}>+91</Text>
            <Text style={styles.numBox}>9595959595</Text>
          </View>
        </View>

        {/* <Text style={[styles.text, { textAlign: 'center', marginTop: 24 }]}>Live Status Update after every two hours</Text>
    <Text style={styles.subText}>I allow my name to be</Text>
    <Text style={[styles.subText, { marginTop: 0 }]}>DISCLOSED</Text>

    <View style={styles.radioBtnContainer}>
        <RadioButton text={'YES'} onPress={() => setSelected(true)} />
        <RadioButton text={'NO'} />
    </View> */}

        <View style={{alignItems: 'center', marginTop: hp('4')}}>
          <FloatingButton
            title={'Submit'}
            width={'20%'}
            mt={33}
            onpress={() => {
              navigation.navigate('Referpartner-p');
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('2'),
  },
  text: {
    color: colors.gray,
    fontWeight: 'bold',
    fontSize: 16,
  },
  mt: {
    marginTop: hp('4.3'),
  },
  nameText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  smallCard: {
    borderColor: colors.gray,
    borderWidth: 1,
    width: hp('30'),
    textAlign: 'right',
    padding: 4,
    fontSize: 16,
  },
  blueBg: {
    backgroundColor: colors.blue,
    color: 'white',
    padding: 3,
    fontSize: 16,
  },
  numBox: {
    borderColor: colors.gray,
    borderWidth: 1,
    padding: 4,
    fontSize: 16,
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: hp('3'),
  },
  radioBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp('3'),
  },
});

export default Referpartner1;

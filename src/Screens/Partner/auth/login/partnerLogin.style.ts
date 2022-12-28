import {StyleSheet} from 'react-native';
import Colors from '../../../../Theme/Colors';
import {hp, wp} from '../../../../Theme/Dimensions';

export default StyleSheet.create({
  input: {
    borderWidth: 2,
    marginVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    lineHeight: 19.36,
    fontWeight: '500',
    letterSpacing: 2,
    color: Colors.Black,
  },
  optView: {
    flexDirection: 'row',
    borderWidth: 2,
    height: hp(9),
    justifyContent: 'center',
    width: wp(70),
  },
  otpBox: {
    margin: 0,
    marginTop: 0,
    marginRight: 8,
    textAlign: 'center',
  },
  otpBoxView: {
    width: 50,
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    backgroundColor: Colors.Grey,
    borderRadius: 5,
    marginVertical: 10,
  },
  ButtonText: {
    color: Colors.white,
  },
  Otp: {
    marginTop: hp(10),
    width: wp(68),
  },
  txt: {
    textAlign: 'center',
    paddingVertical: 5,
  },
});

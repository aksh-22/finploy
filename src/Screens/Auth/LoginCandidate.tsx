import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import BgComponent from '../../components/Bg';
import {CommonStyle, hp, wp} from '../../Theme/Dimensions';
import Colors from '../../Theme/Colors';
import {english} from '../../Theme/string';
import TextInputComp from '../../components/TextInputComp';
import GreenBtn from '../../components/Buttons/BasicBtn';
import EndPoints from '../../Utils/EndPoints';
import {RequestAPIAction} from '../../Utils/Config';
import {useNavigation} from '@react-navigation/native';
import storage from '../../Utils/storage';
import {useDispatch, useSelector} from 'react-redux';
import {setAccessToken} from '../../redux/creators/AuthCreators';

export default function LoginCandidate() {
  const [Otp1, setOtp1] = useState('');
  const [Otp2, setOtp2] = useState('');
  const [Otp3, setOtp3] = useState('');
  const [Otp4, setOtp4] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [OtpShow, setOtpShow] = useState(false);
  const [isUserRegistered, setIsUserRegistered] = useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  let otp1 = useRef();
  let otp2 = useRef();
  let otp3 = useRef();
  let otp4 = useRef();

  const submit = async () => {
    const data = {
      phone: PhoneNumber,
    };

    const result = await RequestAPIAction(
      EndPoints.user.loginWithOtp,
      'POST',
      data,
    );

    if (result.code === 201) {
      setOtpShow(true);
    }
    //If user not register then registerWithOtp will call
    if (result.code === 400 && result.error.statusCode === 400) {
      setIsUserRegistered(false);
      const response = await RequestAPIAction(
        EndPoints.user.registerwithOtp,
        'POST',
        data,
      );
      if (response.code === 201) {
        setOtpShow(true);
      } else {
        setErrorMsg(response.error.message);
      }
    } else {
      setErrorMsg(result.error.message);
    }
  };

  const verifyOtpHandler = async () => {
    const data = {
      phone: PhoneNumber,
      otp: Otp1 + Otp2 + Otp3 + Otp4,
    };

    const result = await RequestAPIAction(
      isUserRegistered
        ? EndPoints.user.verifyLoginWithOtp
        : EndPoints.user.verfiyResisterdOtp,
      'POST',
      data,
    );

    if (result.code === 201) {
      dispatch(setAccessToken(result.response.data.token));
      storage.setItem('token', result.response.data.token);
      isUserRegistered
        ? navigation.navigate('HomeNavigator')
        : navigation.navigate('ProfileUpdate1');
    } else {
      setErrorMsg(result.error.message);
    }
  };

  const onfocusHandler = () => {
    setErrorMsg('');
  };

  return (
    <BgComponent>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{width: wp(80)}}>
          <Text style={CommonStyle(16, 19.36, Colors.Black, '500')}>
            {english.MobileNumber}
          </Text>
          <Text style={CommonStyle(12, 14.52, Colors.Black, '400')}>
            {english.PleaseNumber}
          </Text>
          <View>
            <TextInput
              value={PhoneNumber}
              onChangeText={setPhoneNumber}
              placeholder="+91 9393939393"
              style={styles.input}
              returnKeyType="done"
              onSubmitEditing={submit}
              onFocus={onfocusHandler}
              editable={!OtpShow}
            />
          </View>
        </View>

        {OtpShow && (
          <View style={styles.Otp}>
            <Text
              style={[CommonStyle(16, 19.36, Colors.Black, '500'), styles.txt]}>
              {english.ReceivedOTP}
            </Text>
            <Text
              style={[CommonStyle(12, 14.52, Colors.Grey, '400'), styles.txt]}>
              {english.OtpSubTitle}
            </Text>
            <TouchableOpacity
              activeOpacity={5}
              onPress={() => otp1.focus()}
              style={styles.optView}>
              <TextInputComp
                getInputRef={ref => (otp1 = ref)}
                value={Otp1}
                onChangeText={txt => {
                  setOtp1(txt);
                  if (txt.trim() !== '') otp2.focus();
                }}
                style={styles.otpBox}
                containerStyle={[styles.otpBoxView]}
                maxLength={1}
                autoCapitalize="none"
              />
              <TextInputComp
                getInputRef={ref => (otp2 = ref)}
                value={Otp2}
                onChangeText={txt => {
                  setOtp2(txt);
                  if (txt.trim() !== '') {
                    otp3.focus();
                  } else if (txt == '') {
                    otp1.focus();
                  }
                }}
                onKeyPress={({nativeEvent: {key: keyValue}}) => {
                  keyValue == 'Backspace' ? otp1.focus() : null;
                }}
                style={styles.otpBox}
                containerStyle={styles.otpBoxView}
                maxLength={1}
                autoCapitalize="none"
              />
              <TextInputComp
                getInputRef={ref => (otp3 = ref)}
                value={Otp3}
                onChangeText={txt => {
                  setOtp3(txt);
                  if (txt.trim() !== '') otp4.focus();
                  else if (txt == '') {
                    otp2.focus();
                  }
                }}
                onKeyPress={({nativeEvent: {key: keyValue}}) => {
                  keyValue == 'Backspace' ? otp2.focus() : null;
                }}
                style={styles.otpBox}
                containerStyle={styles.otpBoxView}
                maxLength={1}
                autoCapitalize="none"
              />
              <TextInputComp
                getInputRef={ref => (otp4 = ref)}
                value={Otp4}
                onChangeText={txt => {
                  setOtp4(txt);
                }}
                onKeyPress={({nativeEvent: {key: keyValue}}) => {
                  keyValue == 'Backspace' ? otp3.focus() : null;
                }}
                style={styles.otpBox}
                containerStyle={styles.otpBoxView}
                maxLength={1}
                autoCapitalize="none"
              />
            </TouchableOpacity>
            <View style={{width: wp(30), alignSelf: 'center'}}>
              <GreenBtn
                style={styles.button}
                tStyle={styles.ButtonText}
                text={'submit'}
                onPress={verifyOtpHandler}
              />
            </View>
          </View>
        )}
      </View>
    </BgComponent>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    marginVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    lineHeight: 19.36,
    fontWeight: '500',
    letterSpacing: 2,
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
    borderRadius: 0,
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

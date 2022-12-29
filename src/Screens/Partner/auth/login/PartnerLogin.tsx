import React, {useRef, useState} from 'react';
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import CustomButton from '../../../../components/customButton/CustomButton';
import TextInputComp from '../../../../components/TextInputComp';
import usePartnerDispatch from '../../../../hooks/usePartnerDispatch';
import {useRequest} from '../../../../hooks/useRequest';
import Colors from '../../../../Theme/Colors';
import {CommonStyle, wp} from '../../../../Theme/Dimensions';
import {english} from '../../../../Theme/string';
import {login, verifyLogin} from './../../../../api/auth.service';
import BgComponent from './../../../../components/Bg';
import styles from './partnerLogin.style';

type Props = {};

const PartnerLogin = (props: Props) => {
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [OtpShow, setOtpShow] = useState(false);

  const [Otp1, setOtp1] = useState('');
  const [Otp2, setOtp2] = useState('');
  const [Otp3, setOtp3] = useState('');
  const [Otp4, setOtp4] = useState('');

  let otp1: any = useRef();
  let otp2: any = useRef();
  let otp3: any = useRef();
  let otp4: any = useRef();

  const onSuccess = (fetchedData: any) => {
    setOtpShow(true);
  };

  const onOtpSuccess = (otpFetchedData: any) => {
    onAction(otpFetchedData.data.token);
  };

  // Hooks imported
  const token = useSelector((state: any) => state.partnerUserReducer.token);
  const {onAction} = usePartnerDispatch({ACTION: 'SET_PARTNER_TOKEN'});
  const {isLoading, sendRequest} = useRequest({api: login, onSuccess});
  const {isLoading: otpLoading, sendRequest: otpSendRequest} = useRequest({
    api: verifyLogin,
    onSuccess: onOtpSuccess,
  });

  const onChangeText = (txt: string) => {
    setPhoneNumber(txt);
  };

  const onSubmit = () => {
    const dataToSend = {
      phone: PhoneNumber,
    };
    sendRequest(dataToSend);
  };

  const onFocusHandler = () => {};

  const verifyOtpHandler = () => {
    const dataToSend = {
      phone: PhoneNumber,
      otp: `${Otp1}${Otp2}${Otp3}${Otp4}`,
    };

    otpSendRequest(dataToSend);
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
              onChangeText={onChangeText}
              placeholder="+91 9393939393"
              style={styles.input}
              returnKeyType="done"
              onSubmitEditing={onSubmit}
              onFocus={onFocusHandler}
              editable={!OtpShow}
              placeholderTextColor={Colors.Grey}
              keyboardType="number-pad"
            />
          </View>
        </View>
      </View>
      {isLoading ? (
        <View style={styles.Otp}>
          <ActivityIndicator size={'large'} style={{marginTop: 20}} />
        </View>
      ) : (
        OtpShow && (
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
                onSubmitEditing={verifyOtpHandler}
              />
            </TouchableOpacity>
            <View style={{width: wp(30), alignSelf: 'center'}}>
              <CustomButton
                style={styles.button}
                textStyle={styles.ButtonText}
                text="Submit"
                disable={!Otp1 || !Otp2 || !Otp3 || !Otp4}
                onPress={verifyOtpHandler}
                isLoading={otpLoading}
              />
            </View>
          </View>
        )
      )}
    </BgComponent>
  );
};

export default PartnerLogin;

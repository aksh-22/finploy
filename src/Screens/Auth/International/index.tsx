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
import BgComponent from '../../../components/Bg';
import {CommonStyle, hp, wp} from '../../../Theme/Dimensions';
import Colors from '../../../Theme/Colors';
import {english} from '../../../Theme/string';
import TextInputComp from '../../../components/TextInputComp';
import GreenBtn from '../../../components/Buttons/BasicBtn';
import CountryCode from '../../../components/CountryCode';
import DropDownPicker from 'react-native-dropdown-picker';
import LinkButton from '../../../components/LinkButton';
import {Icons} from '../../../Assets/Svg/Icons';
import InputMain from '../../../components/InputMain';
import {RequestAPIAction} from '../../../Utils/Config';
import EndPoints from '../../../Utils/EndPoints';
import {Snackbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import storage from '../../../Utils/storage';
import {setAccessToken} from '../../../redux/creators/AuthCreators';
import {useDispatch} from 'react-redux';

export default function International() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(CountryCode);
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loading, setLoading] = useState(false);
  const [validationMsg, setValidationMsg] = useState('');
  const [formvalidationStatus, setFormvalidationStatus] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // Phone number validation
  function ValidateNumber(strNumber) {
    var regExp = new RegExp('^\\d+$');
    var isValid = regExp.test(strNumber); // or just: /^\d+$/.test(strNumber);
    return isValid;
  }

  const formValidationFunction = () => {
    if (value === null) {
      setFormvalidationStatus(true);
      setValidationMsg('Please select country');
      return false;
    }
    if (!ValidateNumber(PhoneNumber)) {
      setFormvalidationStatus(true);
      setValidationMsg('Please enter valid phone number!');
      return false;
    }
    if (password.includes(' ') || password.trim().length === 0) {
      setFormvalidationStatus(true);
      setValidationMsg('Please valid password');
      return false;
    }
    return true;
  };

  //Password handling
  const passwordOnchangeHandler = value => {
    setPassword(value);
  };
  const onfocusHandler = () => {
    setFormvalidationStatus(false);
    setValidationMsg('');
  };

  //submit handler

  const submit = async () => {
    if (formValidationFunction() === true) {
      console.log('ok');
    }
    // Api handling
    setLoading(true);

    // Payload for login
    const data1 = {
      phone: PhoneNumber,
      password: password,
    };
    // user Login handling
    const result = await RequestAPIAction(EndPoints.user.login, 'POST', data1);

    if (result.code === 201) {
      dispatch(setAccessToken(result.response.data.token));
      storage.setItem('token', result.response.data.token);
      navigation.navigate('ProfileUpdate1');
    } else {
      //If user not register then registerWithOtp will call
      if (result.code === 400 && result.error.statusCode === 400) {
        // user register handling
        // Payload for register
        const data = {
          phone: PhoneNumber,
          password: password,
          countryCode: value,
        };
        const response = await RequestAPIAction(
          EndPoints.user.register,
          'POST',
          data,
        );
        if (response.code === 201) {
          dispatch(setAccessToken(result.response.data.token));
          storage.setItem('token', response.response.data.token);
          navigation.navigate('ProfileUpdate1');
        } else {
          setErrorMsg(response.error.message);
        }
      } else {
        setErrorMsg(result.error.message);
      }
    }
    setLoading(false);
  };

  return (
    <BgComponent>
      <View style={{marginHorizontal: wp(10)}}>
        <View style={{marginVertical: 20}}>
          <Text style={CommonStyle(16, 19.36, Colors.Black, '500')}>
            {english.PhoneNumber}
          </Text>
          <Text style={CommonStyle(12, 14.52, Colors.Black, '400')}>
            {english.PhoneSub}
          </Text>
        </View>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Country"
          placeholderStyle={{color: Colors.Grey}}
          style={styles.DropInput}
          listItemLabelStyle={{color: Colors.input}}
          selectedItemContainerStyle={{backgroundColor: Colors.input}}
          listParentContainerStyle={styles.list}
          onSelectItem={onfocusHandler}
        />
        <View style={styles.bottom}>
          <View style={styles.inputPhone}>
            <TextInput
              value={value}
              placeholder="+91"
              style={styles.input}
              returnKeyType="done"
              maxLength={3}
            />
          </View>
          <View style={styles.width}>
            <TextInput
              keyboardType="phone-pad"
              value={PhoneNumber}
              onChangeText={setPhoneNumber}
              onFocus={onfocusHandler}
              placeholder="9393939393"
              style={styles.input}
              returnKeyType="done"
              onSubmitEditing={submit}
            />
          </View>
        </View>
        <View>
          <InputMain
            placeholder={'password'}
            onChangeText={passwordOnchangeHandler}
            onFocus={onfocusHandler}
            secureTextEntry={secureTextEntry}
            securePress={() => {
              setSecureTextEntry(secureTextEntry ? false : true);
            }}
          />
        </View>
        <View>
          <Text>{english.linkAccount}</Text>
          <LinkButton name={Icons.LINKDIN1} title="Sign in with Linkedin" />
        </View>
        <View style={styles.submitButton}>
          <GreenBtn
            style={styles.button}
            tStyle={styles.ButtonText}
            text={'Login/Sign Up'}
            disable={formvalidationStatus}
            onPress={() => {
              if (!loading) {
                submit();
              }
            }}
          />
        </View>
        <Text style={{color: 'red', textAlign: 'center'}}>{validationMsg}</Text>
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
    height: wp(12),
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
    backgroundColor: Colors.green,
    borderRadius: 7,
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
  DropInput: {
    backgroundColor: Colors.input,
    borderRadius: 0,
    borderColor: Colors.Black,
    minHeight: wp(11),
    borderWidth: 2,
  },
  list: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderWidth: 0,
  },
  bottom: {
    zIndex: -10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputPhone: {
    width: wp(20),
    height: wp(14),
  },
  width: {
    width: wp(55),
  },
  submitButton: {
    width: wp(50),
    alignSelf: 'center',
  },
});

import {Platform} from 'react-native';
import {Dispatch} from 'redux';
import {setLoading} from '../redux/creators/LoadingCreator';
import {AppActionTypes} from '../redux/types';
import {BASE_API_URL} from './EndPoints';
import {executeGetRequest, executePostRequest} from './Methods';

export default {
  regex: {
    regExEmail:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    nameRegEx: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
    numericRegEx: /\d/,
    specialCharRegEx: /[^a-zA-Z ]/,
  },
  error: {
    error_internet_connection:
      'Something went wrong!! Please check your internet and try again',
    error_empty_first_name: 'Please enter Name',
    error_first_name_numeric: 'Name cannot have numeric values',
    error_first_name_specialChar: 'Name cannot have special characters',
    error_first_name_long: 'Name field cannot have more than 100 characters',
    error_empty_know_from: 'Please enter Know From',
    error_know_from_long:
      'Know from field cannot have more than 200 characters',
    error_bgcolor: 'Please select any color',
    error_empty_characteristic: 'Please enter Characteristic',
    error_characteristic_long:
      'Characteristic field cannot have more than 500 characters',
    error_empty_info: 'Please enter Info',
    error_info_long: 'Info field cannot have more than 500 characters',
    error_empty_notes: 'Please enter Notes',
    error_notes_long: 'Notes field cannot have more than 500 characters',
    error_empty_email: 'Please enter the email',
    error_invalid_email: 'Please enter a valid email address',
    error_empty_Cat_title: 'Please enter Title',
    error_empty_Cat_bgcolor: 'Please select any color',
    error_enter_email: 'Please enter email',
    error_enter_Password: 'Please enter Password',
    error_enter_valid_email: 'Please enter valid email',
    enterOtpScreen: 'The verification code was sent successfully to your email',
    post_successfully: 'Post uploaded successfully',
    error_enter_valid_name: 'Please enter valid name',
    please_select_country: 'please select country',
    Please_enter_description: 'Please enter description',
    Password_Mismatch: 'Password mismatch',
    Failed_post: 'Failed to create post!',
    Post_Delete: 'Post Delete successfully',
    Failed_post_Delete: 'Failed to Delete post!',
    Please_enter_current_password: 'Please enter current password',
    Please_enter_new_password: 'Please enter new password',
    New_password_and_confirm_password_not_matched:
      'New password and confirm password not matched',
    Please_ReEnter_new_password: 'Please re-enter new password',
    Password_not_matched: 'Password and confirm password not matched',
    Please_enter_why_should_attend: 'Please enter why should attend',
    otp_err: 'Otp resend',
    Please_add_registration_link: 'Please add registration link ',
    validOTP: 'Please enter valid otp',
    someThingWentWrong: 'Something went wrong try gain later',
    otp: `The email verification was sent successfully to your email,blue`,
    PasswordMustBe8characters: 'The password must be at least 8 characters',
    Enter_valid_email:
      'Email already exist please try with a different email address',
  },
};

export const RequestAPIAction = async (
  api?: any,
  method?: 'GET' | 'POST',
  data?: any,
  token?: any,
) => {
  try {
    console.log(api);
    if (method == 'POST') {
      const response = await executePostRequest(api, data);
      return response;
    } else {
      if (method == 'GET') {
        const response = await executeGetRequest(api, token);
        return response;
      }
    }
  } catch (error) {
    return error || error;
  }
};

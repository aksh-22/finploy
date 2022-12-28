/**
 * This file contains all application's style relative to fonts
 */
import {Platform, StyleSheet} from 'react-native';
import Colors from './Colors';

const FontSize = {
  verySmall: 10,
  small: 16,
  normal: 19,
};

const Fonts = StyleSheet.create({
  textSmallBlack: {
    fontSize: FontSize.small,
    color: Colors.DarkBlack,
    fontWeight: '400',
    lineHeight: 19.36,
  },
  textSmallGrey: {
    fontSize: FontSize.small,
    color: Colors.border,
    fontWeight: '500',
    lineHeight: 19.36,
  },

  NormalTxt: {
    fontSize: 16,
    color: Colors.Black,
    fontWeight: '500',
    lineHeight: 19.36,
  },
  lightGreyTxtShort: {
    fontSize: 12,
    color: Colors.Grey,
    fontWeight: '400',
    lineHeight: 14.52,
  },
  lightGreyTxtVeryShort: {
    fontSize: 14,
    color: Colors.Grey,
    fontWeight: '400',
    lineHeight: 16.94,
  },
  shortTxtRed: {
    fontSize: FontSize.verySmall,
    color: Colors.Darkred,
    fontWeight: '400',
    lineHeight: 12.1,
  },
  MediumText: {
    fontSize: FontSize.verySmall,
    color: Colors.Darkred,
    fontWeight: '400',
    lineHeight: 12.1,
  },
  h1: {
    fontSize: FontSize.small,
    color: Colors.Black,
    fontWeight: '500',
    lineHeight: 19.36,
  },

  h1grey: {
    fontSize: FontSize.small,
    color: Colors.border,
    fontWeight: '500',
    lineHeight: 19.36,
  },
  MediumGrey: {
    fontSize: FontSize.verySmall,
    color: Colors.Grey,
    fontWeight: '400',
    lineHeight: 12.1,
  },
  MediumBlue: {
    fontSize: FontSize.small,
    color: Colors.Blue,
    fontWeight: '600',
    lineHeight: 19.36,
  },
});
export default Fonts;

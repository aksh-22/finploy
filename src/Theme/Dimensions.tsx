import {Dimensions, PixelRatio, Platform} from 'react-native';
import Colors from './Colors';
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

export const wp = (widthPercent: number | string | any) => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

export const hp = (heightPercent: number | any) => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
}; ///CommonStyleTxt
export const CommonStyle = (
  fontSize?: number,
  lineHeight?: number,
  color?: string,
  fontWeight?: string,
): any => {
  const style = [
    {
      fontWeight: fontWeight,
      fontSize: fontSize,
      lineHeight: lineHeight,
      color: color,
    },
  ];
  return style;
};

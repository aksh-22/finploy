import {StyleSheet} from 'react-native';
import Colors from '../../Theme/Colors';
import {hp, wp} from '../../Theme/Dimensions';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    marginHorizontal: wp('4'),
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingVertical: hp('2.8'),
    marginTop: hp('3'),
    paddingHorizontal: wp(6),
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.Black,
  },
  programText: {
    fontSize: 24,
    textAlign: 'center',
    color: '#175DA8',
    fontWeight: 'bold',
  },
  img: {
    alignSelf: 'center',
    marginTop: hp('2'),
  },
  bottomText: {
    marginTop: hp('2'),
    paddingHorizontal: wp('4'),
    color: Colors.Black,
  },
  subContainer: {
    paddingHorizontal: wp('4'),
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: hp('3'),
  },
  offerText: {
    fontSize: 16,
    color: '#175DA8',
    fontWeight: 'bold',
    paddingLeft: 16,
    marginTop: hp('2.4'),
  },
  createCodeBtn: {
    flexDirection: 'row',
    borderColor: '#4EA647',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: wp('2'),
    paddingVertical: hp('.6'),
  },
  plus: {
    color: '#4EA647',
  },
  lineStyle: {
    borderWidth: 2,
    borderColor: 'black',
    margin: 10,
  },
  grayContainer: {
    // justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    marginHorizontal: wp('4'),
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingVertical: hp('2.8'),
    borderTopColor: '#CCCCCC',
    borderWidth: 1,
    borderColor: '#F1F1F1',
    justifyContent: 'space-between',
    paddingHorizontal: wp(6),
  },
});

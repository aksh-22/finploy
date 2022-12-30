import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Theme/Dimensions';
import {colors} from '../../Utils/colors';

const styles = StyleSheet.create({
  subContainer: {},
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: wp('4'),
    marginTop: hp('2'),
  },
  payrollChip: {
    backgroundColor: colors.cardBg,
    width: wp('20'),
    borderRadius: 20,
    textAlign: 'center',
    color: colors.blue,
    paddingVertical: 3,
    marginTop: hp('1.2'),
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp('4.5'),
    marginTop: hp('1'),
    alignItems: 'center',
  },
  searchButton: {
    backgroundColor: colors.blue,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  keyword: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginTop: 20,
  },
  advanceSearchText: {
    textAlign: 'center',
    marginTop: hp('1'),
    color: colors.blue,
    marginBottom: hp('1'),
  },
  borderButton: {
    marginLeft: wp('4'),
    marginRight: wp('4'),
    backgroundColor: colors.lightGray,
    borderColor: '#4EA647',
    borderWidth: 1,
    height: hp('4'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  urgentButton: {
    backgroundColor: colors.blue,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp('4'),
    marginRight: wp('4'),
    marginTop: hp('1'),
    padding: 10,
  },
});

export default styles;

import {View, Text} from 'react-native';
import React from 'react';
import {hp, wp} from '../../Theme/Dimensions';
import {colors} from '../../Utils/colors';

type Props = {};

const TableHead = (props: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: wp('4'),
        paddingHorizontal: wp('3'),
        paddingVertical: hp('1.5'),
        backgroundColor: colors.cardBg,
        marginTop: hp('3'),
      }}>
      <View
        style={{
          flex: 0.7,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Rank</Text>
        <Text
          style={{
            marginLeft: wp('1.9'),
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Members
        </Text>
      </View>
      <View
        style={{
          flex: 0.4,
          alignItems: 'flex-end',
          marginRight: 20,
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Earnings</Text>
      </View>
    </View>
  );
};

export default TableHead;

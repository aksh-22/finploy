import {View, Text, Image} from 'react-native';
import React from 'react';
import {hp, wp} from '../../Theme/Dimensions';
import {colors} from '../../Utils/colors';
import styles from './styles';
import {jobsElementItemType} from '../../../typings/jobs-data-type';

type Props = {
  data: jobsElementItemType;
};

const JobItem = ({data}: Props) => {
  return (
    <View style={styles.row}>
      <View>
        <Text numberOfLines={2} style={{width: wp('25'), color: colors.blue}}>
          {data?.title}
        </Text>
        <Text style={styles.payrollChip}>Client payroll</Text>
      </View>
      <View>
        <Text style={{color: colors.green, fontWeight: 'bold'}}>
          200,00,00 INR
        </Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Image source={require('../../Assets/blueShare.png')} />
        <Image
          style={{marginLeft: wp('6')}}
          source={require('../../Assets/rightArrow.png')}
        />
      </View>
    </View>
  );
};

export default JobItem;

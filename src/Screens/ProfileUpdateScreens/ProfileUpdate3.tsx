import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import PUProgBar1 from '../../components/PUProgBars/PUProgBar1';
import SkipBtn from '../../components/Buttons/SkipBtn';
import NextBtn from '../../components/Buttons/NextBtn';
import PlusIcon from '../../Assets/Svg/PlusIcon.svg';
import PlusIconBlue from '../../Assets/Svg/rorate-pluse.svg';
import ExperiencedIcon from '../../Assets/Svg/ExperiencedIcon.svg';
import FresherIcon from '../../Assets/Svg/FresherIcon.svg';
import Fonts from '../../Theme/Fonts';
import {hp, wp} from '../../Theme/Dimensions';
import Colors from '../../Theme/Colors';
import CommonLayout from '../../Theme/CommonLayout';
import {colors} from '../../Utils/colors';
import {english} from '../../Theme/string';

const employmentData = [
  {
    id: 1,
    text: 'Full Time',
  },
  {
    id: 2,
    text: 'Contract',
  },
  {
    id: 3,
    text: 'Intern',
  },
  {
    id: 4,
    text: 'Part Time',
  },
  {
    id: 5,
    text: 'Temporary',
  },
  {
    id: 6,
    text: 'Other',
  },
];

const NoticePeriodData = [
  {
    id: 1,
    text: '0 Days',
  },
  {
    id: 2,
    text: '15 Days',
  },
  {
    id: 3,
    text: '30 Days',
  },
  {
    id: 4,
    text: '2 Months',
  },
  {
    id: 5,
    text: '2+ Months',
  },
  {
    id: 6,
    text: 'Serving',
  },
];

const IconCard = ({uri, text, icon, selected, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles.cardContainer, selected && {backgroundColor: '#E8EFF6'}]}>
      {icon ? icon : <Image source={uri} style={{width: 35, height: 35}} />}
      <Text style={[Fonts.lightGreyTxtShort, styles.cardTextStyle]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const NoticePeriodCard = ({text, onPress, selected}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.notice, selected && {backgroundColor: 'white'}]}
      activeOpacity={0.8}>
      <Text style={styles.noticeText}>{text}</Text>
    </TouchableOpacity>
  );
};
const EmploymentCard = ({item, onPress, selected}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.checkedValue, selected && {backgroundColor: '#E8EFF6'}]}>
      <Text
        style={[
          Fonts.textSmallGrey,
          {marginHorizontal: 10},
          selected && {color: '#175DA8'},
        ]}>
        {item.text}
      </Text>
      {selected ? <PlusIconBlue /> : <PlusIcon />}
    </TouchableOpacity>
  );
};

export default function ProfileUpdate3() {
  const [years, setYears] = useState('');
  const [months, setMonths] = useState('');
  const [employementType, setEmployementType] = useState('');
  const [experienced, setExperienced] = useState(null);
  const [noticePeriod, setNoticePeriod] = useState('');

  return (
    <SafeAreaView style={CommonLayout.common}>
      {/* Progress Bar 1 */}
      <PUProgBar1 />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Work Experience */}
        <Text style={[Fonts.NormalTxt, styles.margin]}>
          {english.WhatsYourWorkEx}
        </Text>
        <View style={styles.card}>
          <IconCard
            icon={<ExperiencedIcon />}
            text="Yes, I have work experience."
            uri={undefined}
            onPress={() => setExperienced(true)}
            selected={experienced === true && true}
          />
          <IconCard
            uri={undefined}
            icon={<FresherIcon />}
            text="I am a Fresher"
            onPress={() => setExperienced(false)}
            selected={experienced === false && true}
          />
        </View>

        {/* Work Employment Type */}
        <Text style={Fonts.textSmallBlack}>{english.employmentWas}</Text>
        <FlatList
          scrollEnabled={false}
          data={employmentData}
          renderItem={({item}) => (
            <EmploymentCard
              item={item}
              selected={item.text === employementType ? true : false}
              onPress={() => {
                setEmployementType(item.text);
              }}
            />
          )}
          numColumns={2}
        />

        {/* Work Experience */}
        <Text style={[Fonts.NormalTxt, {marginVertical: 10}]}>
          {english.totalWorkExperience}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            keyboardType="numeric"
            placeholder="Year"
            placeholderTextColor={Colors.border}
            onChange={(years: any) => {
              setYears(years);
            }}
            style={styles.input}
          />
          <TextInput
            keyboardType="numeric"
            placeholder="Months"
            placeholderTextColor={Colors.border}
            onChange={(months: any) => {
              setMonths(months);
            }}
            style={styles.input}
          />
        </View>

        {/* Notice Period */}
        <Text style={[Fonts.textSmallBlack, styles.margin]}>
          {english.NoticePeriod}
        </Text>
        <FlatList
          scrollEnabled={false}
          data={NoticePeriodData}
          renderItem={({item}) => (
            <NoticePeriodCard
              text={item.text}
              onPress={() => {
                setNoticePeriod(item.text);
              }}
              selected={noticePeriod === item.text}
            />
          )}
          numColumns={2}
        />
        {/* Buttons */}

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <SkipBtn screen={'HomeNavigator'} />
          <NextBtn screen={'ProfileUpdate4'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 5,
    elevation: 8,
    paddingHorizontal: 20,
    shadowColor: '#000000',
    paddingVertical: 10,
  },
  cardTextStyle: {
    color: Colors.Black,
    textAlign: 'center',
    width: wp(30),
    height: hp(4),
  },
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  margin: {
    marginVertical: wp(2),
  },
  checkedValue: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.Blue,
    paddingHorizontal: 8,
    paddingVertical: 8,
    margin: 3,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    color: Colors.Black,
    borderWidth: 0.5,
    borderColor: Colors.border,
    fontSize: 18,
    padding: 10,
    width: wp(30),
    borderRadius: 5,
    marginRight: 20,
  },
  notice: {
    borderRadius: 5,
    backgroundColor: '#E8EFF6',
    padding: 10,
    justifyContent: 'center',
    flex: 1,
    margin: 10,
  },
  noticeText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 10,
  },
});

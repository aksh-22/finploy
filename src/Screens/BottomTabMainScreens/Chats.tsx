import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import Header from '../../components/Header';
import SliderButton from '../../components/SliderButton';
import Colors from '../../Theme/Colors';
import {getIcons, Icons} from '../../Assets/Svg/Icons';
import {wp} from '../../Theme/Dimensions';
import {navigationRef} from '../../Navigators/navigation-utilities';

export default function Chats(props: any) {
  const data: readonly any[] | null | undefined = [
    {
      title: 'Dev Tech',
      time: '27/04/2022',
      title2: 'UI/UX Design Internship',
      detail: 'You: Hi, Thanks for scheduling the interview. I will be ....',
    },
    {
      title: 'Citi',
      time: '26/04/2022',
      title2: 'UI/UX Design Internship',
      detail: 'You: Thanks, I will send my resume to the given email ...',
    },
    {
      title: 'Slice',
      time: '26/04/2022',
      title2: 'UI/UX Design Internship',
      detail: 'Slice: Yes',
      Button: true,
    },
    {
      title: 'BlackBug',
      time: '25/04/2022',
      title2: 'UI/UX Design Internship',
      detail: 'You: Thanks, I will send my resume to the given email...',
    },
  ];

  return (
    <View style={styles.container}>
      <Header {...props} />

      <SliderButton />
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={5}
              onPress={() => props.navigation.navigate('MessageCenter')}
              style={styles.ListComponent}>
              <View style={styles.listHeader}>
                <Text style={styles.titleTxt}>{item.title}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
              <View style={{alignItems: 'flex-start'}}>
                <Text style={styles.subtitle}>{item.title2}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.shortButton}>
                  {getIcons(Icons.CHARGE, wp(4))}
                  <Text style={styles.ShortButtonTxt}>In-Touch</Text>
                </View>
                {item.Button && (
                  <View
                    style={[
                      styles.shortButton,
                      {
                        backgroundColor: Colors.lightGreen,
                      },
                    ]}>
                    {getIcons(Icons.CALENDER, wp(4))}
                    <Text style={[styles.ShortButtonTxt, styles.margin]}>
                      Interview scheduled
                    </Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleTxt: {
    fontSize: 16,
    lineHeight: 19.36,
    textAlign: 'center',
    color: Colors.Black,
    fontWeight: '500',
  },
  time: {
    fontSize: 10,
    lineHeight: 12.1,
    textAlign: 'center',
    color: Colors.Black,
    fontWeight: '400',
  },
  subtitle: {
    fontSize: 10,
    lineHeight: 12.1,
    textAlign: 'center',
    color: Colors.Grey,
    fontWeight: '400',
  },
  ListComponent: {
    paddingHorizontal: 20,
    paddingTop: 5,
    borderTopWidth: 0.3,
    borderBottomWidth: 0.4,
    borderColor: Colors.Grey,
  },
  shortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#EDF6ED',
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginVertical: 10,
    marginHorizontal: 2,
  },
  ShortButtonTxt: {
    fontSize: 10,
    lineHeight: 12.1,
    color: Colors.Black,
    fontWeight: '500',
  },
  margin: {
    marginHorizontal: 2,
  },
});

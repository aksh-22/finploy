import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';

import PUProgBar4 from '../../components/PUProgBars/PUProgBar4';

// Importing Icons

import LinkdinIcon from '../../Assets/Svg/SocialProfiles/LinkdinIcon.svg';
import FacebookIcon from '../../Assets/Svg/SocialProfiles/FacebookIcon.svg';
import TwitterIcon from '../../Assets/Svg/SocialProfiles/TwitterIcon.svg';
import GitHubIcon from '../../Assets/Svg/SocialProfiles/GitHubIcon.svg';

import SkipBtn from '../../components/Buttons/SkipBtn';
import NextBtn from '../../components/Buttons/NextBtn';

const socialProfileData = [
  {
    id: 1,
    placeHolder: 'Enter LinkedIn profile URL',
    icon: <LinkdinIcon />,
  },
  {
    id: 2,
    placeHolder: 'Enter Facebook profile URL',
    icon: <FacebookIcon />,
  },
  {
    id: 3,
    placeHolder: 'Enter Twitter profile URL',
    icon: <TwitterIcon />,
  },
  {
    id: 4,
    placeHolder: 'Enter stackoverflow profile URL',
    icon: (
      <Image
        source={require('../../Assets/StackOverflowIcon.png')}
        style={{width: 22, height: 22}}
      />
    ),
  },
  {
    id: 5,
    placeHolder: 'Enter Redit profile URL',
    icon: (
      <Image
        source={require('../../Assets/RedditIcon.png')}
        style={{width: 22, height: 22}}
      />
    ),
  },
  {
    id: 6,
    placeHolder: 'Enter Github profile URL',
    icon: <GitHubIcon />,
  },
  {
    id: 7,
    placeHolder: 'Enter Social profile URL',
    icon: (
      <Image
        source={require('../../Assets/Male.png')}
        style={{width: 22, height: 22}}
      />
    ),
  },
  {
    id: 8,
    placeHolder: 'Enter Social profile URL',
    icon: (
      <Image
        source={require('../../Assets/Male.png')}
        style={{width: 22, height: 22}}
      />
    ),
  },
  {
    id: 9,
    placeHolder: 'Enter Social profile URL',
    icon: (
      <Image
        source={require('../../Assets/Male.png')}
        style={{width: 22, height: 22}}
      />
    ),
  },
];

export default function ProfileUpdate8() {
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 20,
        paddingTop: 20,
        flex: 1,
        backgroundColor: 'white',
      }}>
      {/* Progress Bar 1 */}
      <PUProgBar4 />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Enter your social profile link */}
        <Text style={styles.title}>{'Enter your social profile link'}</Text>

        <FlatList
          scrollEnabled={false}
          data={socialProfileData}
          renderItem={({item}) => {
            return (
              <View style={styles.inputBox}>
                {item.icon}
                <TextInput
                  placeholder={item.placeHolder}
                  style={{marginHorizontal: 10}}
                />
              </View>
            );
          }}
        />

        {/* Buttons */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <SkipBtn screen={'HomeNavigator'} />
          <NextBtn screen={'ProfileUpdate9'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'black',
    marginVertical: 20,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
});

import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import HeaderBar from '../../components/Header';
import Colors from '../../Theme/Colors';
import {CommonStyle, wp} from '../../Theme/Dimensions';
import {getIcons, Icons} from '../../Assets/Svg/Icons';
import {english} from '../../Theme/string';
import List from './List';
import {UserProfile} from '../../Assets/Images';
import CustomBottom from './CustomBottom';
import AboutEducation from './AboutEducation';
import ProfileEdit from './ProfileEdit';
import AboutYourSkills from './AboutYourSkills';
import AboutWorkExperience from './AboutWorkExperience';
import AboutIdealJob from './AboutIdealJob';
import AboutSocialProfile from './AboutSocialProfile';
import Add from '../../components/Add';

export default function DocumentLibrary(Props: any) {
  const [Education, setEducation] = useState(false);
  const [WorkExperience, setWorkExperience] = useState(false);
  const [IdealJob, setIdealJob] = useState(false);
  const [Skills, setSkills] = useState(false);
  const [AboutYou, setAboutYou] = useState(false);
  const [Social, setSocial] = useState(false);

  return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <HeaderBar {...Props} />
      <ScrollView>
        <View style={{marginBottom: 60}}>
          <View
            style={{
              borderTopWidth: 0.2,
              borderBottomWidth: 0.2,
              padding: 10,
              borderColor: Colors.Grey,
            }}>
            {/* //Progress// */}
            <View style={styles.Progress}>
              <Text style={CommonStyle(16, 24, Colors.Black, '500')}>
                {english.ProfileStrength}
              </Text>
              <Text style={CommonStyle(16, 24, Colors.green, '500')}>
                29% {english.complete}
              </Text>
            </View>
            {/* //Progress// */}
            {/* //ProgressBar// */}
            <View style={styles.Pressing}>
              <Text>0%</Text>
              <View style={styles.ProgressBar}>
                <View style={styles.CompleteProgress}></View>
              </View>
              <Text>100%</Text>
            </View>

            <View style={styles.ProgressBottom}>
              <Text style={CommonStyle(12, 18, Colors.Black, '500')}>
                {english.RecruitersFrom} 29%
              </Text>
              {getIcons(Icons.INFO, wp(8))}
            </View>
            {/* //ProgressBar// */}
          </View>

          {/* //Body// */}

          <View style={{padding: 10}}>
            <Text style={CommonStyle(16, 24, Colors.Black, '500')}>
              7 {english.PendingActions}
            </Text>
            <List name="Resume" present="25" />
            <List name="Education" present="25" />
            <List name="Employment" present="25" />
            <List name="Verify mobile number" present="25" />
            <List name="Profile picture" present="25" />
            <List name="Preffered location" present="25" />
            <List name="Skills" present="25" />
          </View>

          {/* //userprofile// */}

          {/* <View style={[styles.row, {alignItems: 'center', paddingHorizontal: 20}]}>
        <Image resizeMode="contain" style={styles.Image} source={UserProfile} />
        <View style={{paddingHorizontal: 20}}>
          <Text style={CommonStyle(16, 24, Colors.Black, '500')}>
            First and Last name
          </Text> 
          <Text style={CommonStyle(12, 18, Colors.Black, '500')}>
            Profile title
          </Text>
          <Text style={CommonStyle(12, 18, Colors.Black, '500')}>
            Last Login Date: 20 feb 2021
          </Text>
        </View>
      </View> */}
          {/* //userprofile// */}

          <View style={{paddingHorizontal: 20}}>
            <Text style={CommonStyle(16, 24, Colors.Black, '500')}>
              {Education ? english.AboutEducation : ''}
              {WorkExperience ? english.AboutWorkExperience : ''}
              {IdealJob ? english.AboutIdealJob : ''}
              {Skills ? english.AboutYourSkills : ''}
              {AboutYou ? english.AboutYourProfile : ''}
              {Social ? english.Social : ''}
            </Text>

            {Education && <AboutEducation cancel={() => setEducation(false)} />}
            {WorkExperience && (
              <AboutWorkExperience cancel={() => setWorkExperience(false)} />
            )}
            {IdealJob && <AboutIdealJob cancel={() => setIdealJob(false)} />}
            {Skills && <AboutYourSkills cancel={() => setSkills(false)} />}
            {AboutYou && <ProfileEdit cancel={() => setAboutYou(false)} />}
            {Social && <AboutSocialProfile cancel={() => setSocial(false)} />}

            {Social ||
            Education ||
            WorkExperience ||
            IdealJob ||
            Skills ||
            AboutYou ? null : (
              <>
                <Text style={CommonStyle(16, 24, Colors.Black, '500')}>
                  {english.Social}
                </Text>
                <CustomBottom
                  onPress={() => setEducation(true)}
                  label={'Education'}
                />
                <CustomBottom
                  onPress={() => setWorkExperience(true)}
                  label={'Work experience'}
                />
                <CustomBottom
                  onPress={() => setIdealJob(true)}
                  label={'Ideal Job'}
                />
                <CustomBottom
                  onPress={() => setSkills(true)}
                  label={'Skills'}
                />
                <CustomBottom
                  onPress={() => setAboutYou(true)}
                  label={'About You'}
                />
                <CustomBottom
                  onPress={() => setSocial(true)}
                  label={'Social'}
                />
              </>
            )}
          </View>
        </View>
        <Add Button />
      </ScrollView>

      {/* //Body// */}
    </View>
  );
}

const styles = StyleSheet.create({
  Progress: {
    flexDirection: 'row',
  },
  ProgressBar: {
    width: wp(75),
    borderRadius: 10,
    backgroundColor: Colors.Grey,
    height: 5,
  },
  CompleteProgress: {
    width: wp(20),
    height: 5,
    borderRadius: 10,
    backgroundColor: Colors.red,
  },
  Pressing: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ProgressBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
  },
  Image: {
    height: wp(15),
    width: wp(15),
  },
});

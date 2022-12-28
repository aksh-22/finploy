import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';

import PUProgBar5 from '../../components/PUProgBars/PUProgBar5';
import * as ImagePicker from 'react-native-image-picker';

import SkipBtn from '../../components/Buttons/SkipBtn';
import NextBtn from '../../components/Buttons/NextBtn';

export default function ProfileUpdate10() {
  const selectVideo = async () => {
    ImagePicker.launchImageLibrary(
      {mediaType: 'video', includeBase64: true},
      response => {
        console.log(response);
        setState({video: response});
      },
    );
  };
  const [remindMeLater, setRemindMeLater] = useState(false);
  console.log(remindMeLater);
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 20,
        paddingTop: 20,
        flex: 1,
        backgroundColor: 'white',
      }}>
      {/* Progress Bar 1 */}
      <PUProgBar5 />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Video/Audio Intro */}
        <Text style={styles.title}>{'Video/Audio Intro'}</Text>

        {/* Upload Button */}
        <Text style={styles.subTitle}>
          {
            'Recruiters are more likely to notice applications with a video/audio profile. Create one now. It is Easy and free.'
          }
        </Text>

        <TouchableOpacity
          onPress={() => selectVideo()}
          style={styles.uploadBtn}>
          <Text style={styles.uploadBtnText}>{'Upload Video Now'}</Text>
          <Image
            source={require('../../Assets/UploadIcon.png')}
            style={{width: 28, height: 32}}
          />
        </TouchableOpacity>

        {/* Remind Me Later Button */}

        <TouchableOpacity
          onPress={() => {
            setRemindMeLater(!remindMeLater), console.log(remindMeLater);
          }}
          style={styles.remindMeLater}>
          <Text style={styles.remindMeLaterText}>{'Remind me later'}</Text>
        </TouchableOpacity>

        {/* Buttons */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <SkipBtn screen={'HomeNavigator'} />
          <NextBtn screen={'ProfileUpdate11'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'black',
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 16,
    color: 'black',
    marginVertical: 10,
  },
  uploadBtn: {
    marginTop: 50,
    marginBottom: 20,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1,
    backgroundColor: '#E8EFF6',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  uploadBtnText: {
    fontSize: 20,
    color: '#175DA8',
    fontWeight: 'bold',
  },
  remindMeLaterText: {
    fontSize: 20,
    color: '#6F6F6F',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  remindMeLater: {
    height: 52,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});

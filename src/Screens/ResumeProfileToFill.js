import {React, useState, useCallback} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
  Image,
} from 'react-native';
import MenuIcon from '../Assets/Svg/MenuIcon.svg';
import PenIconBlue from '../Assets/Svg/PenIconBlue.svg';
import Add from '../Assets/Svg/Add.svg';
import Header from '../components/Header';
import DocumentPicker from 'react-native-document-picker';

import Education from '../components/ProfileFillComponents/Education';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// import Pdf from 'react-native-pdf';

const Button = btnText => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.btnText}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default function ResumeProfileToFill() {
  const navigation = useNavigation();
  const [showResume, setShowResume] = useState(false);

  const [pdfDocument, setPdfDocument] = useState([]);

  const handleShowResume = () => {
    setShowResume(!showResume);
  };
  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
      });
      setPdfDocument(response);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      {/* <Header
        placement="left"
        leftComponent={<MenuIcon />}
        centerComponent={
          <Image
            source={require('../Assets/HeaderLogo.png')}
            style={{height: 32, borderRadius: 32}}
          />
        }
        rightComponent={
          <Image
            source={require('../Assets/Profile.png')}
            style={{height: 32, width: 32, borderRadius: 32}}
          />
        }
      /> */}

      <ScrollView style={{backgroundColor: 'white'}}>
        {/* Resume Card */}
        <View style={styles.resumeContainer}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              textAlign: 'center',
              marginTop: hp(2),
            }}>
            {
              'You are applying for the job of AVP/VP, Real Estate Fund Services '
            }
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: 'gray',
              textAlign: 'center',
              marginTop: hp(2),
              marginHorizontal: wp(2),
            }}>
            {
              'Please review your profile details and make sure you have selected the most appropriate resume before completing your application. You can add or edit these '
            }
          </Text>
          {/* <Button
            // btnText="UPLOAD BRESUME"
            onPress={async () => {
              try {
                const file = await DocumentPicker.pick({
                  type: [DocumentPicker.types.pdf],
                  copyTo: 'documentDirectory',
                });
                setPdfDocument(
                  decodeURI(file.fileCopyUri.replace('file://', '')),
                );
              } catch (error) {
                if (DocumentPicker.isCancel(error)) {
                  // The user canceled the document picker.
                } else {
                  throw error;
                }
              }
            }}
          /> */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleDocumentSelection}>
            <Text style={styles.btnText}>Upload Resume</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              handleShowResume();
            }}>
            <Text
              style={{
                color: showResume ? '#EB182E' : '#4EA647',
                textAlign: 'center',
                marginTop: hp(2),
                marginBottom: hp(2),
              }}>
              {'SHOW PREVIEW'}
            </Text>
          </TouchableOpacity>
        </View>
        {showResume ? (
          <View style={{marginHorizontal: wp(1)}}>
            {/* Resume Separator */}
            <View style={{flexDirection: 'row'}}>
              <View style={{height: 2, backgroundColor: '#9E9E9E', flex: 1}} />
              <Text
                style={{color: '#111111', fontSize: 10, marginHorizontal: 20}}>
                {'OR FILL PERSONAL DETAILS '}
              </Text>
              <View style={{height: 2, backgroundColor: '#9E9E9E', flex: 1}} />
            </View>

            {/* Personal Details Details */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: wp(5),
              }}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: 'black', fontSize: 16}}>
                    {'Harsh Jain'}
                  </Text>
                  <Text style={{color: 'gray', fontSize: 14}}>{'(M)'}</Text>
                </View>
                {/* Email */}
                <Text style={styles.normaltext}>{'Harshjain@gmail.com'}</Text>
                {/* Phone Number */}
                <Text style={styles.normaltext}>{'+91 9565325655'}</Text>
                {/* Location */}
                <Text style={styles.normaltext}>{'Mumbai, Pune'}</Text>
              </View>
              <TouchableOpacity>
                <PenIconBlue />
              </TouchableOpacity>
            </View>

            {/* Separator */}
            <View style={styles.separator} />

            {/*  Total Work Experience */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: wp(5),
              }}>
              <View>
                <Text style={{color: 'black'}}>{'Total Work Experience'}</Text>
                <Text style={{color: 'black'}}>{'5-7 yrs'}</Text>
              </View>
              <View>
                <Text>{'Current Work Sector'}</Text>
                <Text>{'Mutual Funds'}</Text>
              </View>
              <TouchableOpacity>
                <PenIconBlue />
              </TouchableOpacity>
            </View>

            {/* Separator */}
            <View style={styles.separator} />

            {/* Work In */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: wp(5),
              }}>
              <View>
                <Text>{'I CAN WORK LEGALLY IN'}</Text>
                <Text>{'Singapore'}</Text>
              </View>
              <View>
                <Text>{'AVAILABILITY'}</Text>
                <Text>{'1 Week'}</Text>
              </View>
              <TouchableOpacity>
                <PenIconBlue />
              </TouchableOpacity>
            </View>

            {/* Separator */}
            <View style={styles.separator} />

            {/* Education */}
            <View>
              <Text style={styles.heading}>{'EDUCATION'}</Text>
              <TouchableOpacity
                onPress={() => {
                  <Education />;
                  // navigation.navigate('Education')
                }}>
                <Add style={{margin: 10, marginHorizontal: wp(5)}} />
                <Text style={{marginHorizontal: wp(5), color: '#175DA8'}}>
                  {'Add Education'}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Separator */}
            <View style={styles.separator} />

            {/* Work Experience */}
            <View>
              <Text style={styles.heading}>{'Work Experience'}</Text>
              <TouchableOpacity>
                <View>
                  <Add style={{margin: 10, marginHorizontal: wp(5)}} />
                  <Text style={{marginHorizontal: wp(5), color: '#175DA8'}}>
                    {'Add Job'}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* Separator */}
            <View style={styles.separator} />

            {/* TRAININGS/COURSES */}
            <View>
              <Text style={styles.heading}>{'TRAININGS/COURSES'}</Text>
              <TouchableOpacity>
                <View>
                  <Add style={{margin: 10, marginHorizontal: wp(5)}} />
                  <Text style={{marginHorizontal: wp(5), color: '#175DA8'}}>
                    {'Add Training/Courses'}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* Separator */}
            <View style={styles.separator} />

            {/* SKILLS */}
            <View>
              <Text style={styles.heading}>{'SKILLS'}</Text>
              <TouchableOpacity>
                <View>
                  <Add style={{margin: 10, marginHorizontal: wp(5)}} />
                  <Text style={{marginHorizontal: wp(5), color: '#175DA8'}}>
                    {'Add Skills'}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* Separator */}
            <View style={styles.separator} />

            {/* PORTFOLIO / WORK SAMPLES */}
            <View>
              <Text style={styles.heading}>{'PORTFOLIO / WORK SAMPLES'}</Text>
              <TouchableOpacity>
                <View>
                  <Add style={{margin: 10, marginHorizontal: wp(5)}} />
                  <Text style={{marginHorizontal: wp(5), color: '#175DA8'}}>
                    {'Add Portfolio / Work sample '}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* Separator */}
            <View style={styles.separator} />

            {/* Language */}
            <View>
              <Text style={styles.heading}>{'Language'}</Text>
              <TouchableOpacity>
                <View>
                  <Add style={{margin: 10, marginHorizontal: wp(5)}} />
                  <Text style={{marginHorizontal: wp(5), color: '#175DA8'}}>
                    {'Add Language '}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* Separator */}
            <View style={styles.separator} />

            {/* ACCOMPLISHMENTS / ADDITIONAL DETAILS */}
            <View>
              <Text style={styles.heading}>
                {'ACCOMPLISHMENTS / ADDITIONAL DETAILS'}
              </Text>
              <TouchableOpacity>
                <View>
                  <Add style={{margin: 10, marginHorizontal: wp(5)}} />
                  <Text style={{marginHorizontal: wp(5), color: '#175DA8'}}>
                    {'Add Additional Details  '}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* Separator */}
            <View style={styles.separator} />

            <View
              style={{
                marginVertical: 20,
                alignContent: 'flex-end',
                justifyContent: 'flex-end',
              }}>
              {/* <Button btnText={'Save changes'} /> */}
              <TouchableOpacity
                style={{
                  backgroundColor: '#175DA8',
                  paddingVertical: hp(2),
                  marginLeft: wp(60),
                  marginRight: wp(2),
                  justifyContent: 'flex-end',
                  marginTop: hp(2),
                  borderRadius: 10,
                }}>
                <Text style={styles.btnText}>Save Changes</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            {/* Separator */}
            <View style={{height: 2, backgroundColor: '#9E9E9E', flex: 1}} />

            <View style={{flex: 1}}>
              <Text
                style={{
                  marginVertical: 20,
                  color: '#175DA8',
                  // fontWeight: 400,
                  textAlign: 'center',
                }}>
                {'Resume Preview'}
              </Text>

              {/* <Pdf
                source={pdfDocument}
                onLoadComplete={(numberOfPages, filePath) => {
                  console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                  console.log(`Current page: ${page}`);
                }}
                onError={error => {
                  console.log(error);
                }}
                onPressLink={uri => {
                  console.log(`Link pressed: ${uri}`);
                }}
                style={styles.pdf}
              /> */}

              <View style={{alignContent: 'center'}}>
                {/* <Button btnText={'Back to Apply'} /> */}
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.btnText}>Save Changes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  resumeContainer: {
    marginTop: hp(2),
    // padding: heightPercentageToDP(2),
    alignContent: 'center',
    elevation: 20,
    shadowColor: '#52006A',
    marginHorizontal: widthPercentageToDP(8),
    backgroundColor: 'white',
    marginBottom: hp(4),
  },
  button: {
    backgroundColor: '#175DA8',
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
    marginHorizontal: wp(22),
    marginTop: hp(2),
    borderRadius: 10,
  },
  btnText: {
    fontSize: 16,
    // fontWeight: 500,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  separator: {
    height: 3,
    backgroundColor: '#9E9E9E',
    flex: 1,
    marginVertical: 20,
  },
  normaltext: {
    fontSize: 14,
    // fontWeight: 400,
    color: 'gray',
  },
  heading: {
    fontSize: 16,
    color: 'gray',
    marginHorizontal: wp(5),
    // fontWeight: '500',
  },

  pdf: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
});

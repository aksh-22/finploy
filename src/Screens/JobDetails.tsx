import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import * as React from 'react';
import {Header} from 'react-native-elements';
import MenuIcon from '../Assets/Svg/MenuIcon.svg';
import ViewsBlack from '../Assets/Svg/ViewsBlack.svg';
import ExperiencedIcon from '../Assets/Svg/ExperiencedIcon.svg';
import Salary from '../Assets/Svg/Salary.svg';
import GlobeBlack from '../Assets/Svg/GlobeBlack.svg';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const data = {
  detail: {
    title: 'REGIONAL CUSTOMER ACQUISITION MANAGER',
    companyName: 'Muthoot Finance',
    location: 'Karnataka, India',
    posted: '10',
    experience: '2 - 5',
    views: '10',
    salary: 'Not Specified',
    jobId: '1234456',
    international: true,
  },
  jobDescriptionData: {
    role: 'Credit Manager ',
    industryType: 'Analytics/ KPO/ Research ',
    functionalArea: 'BFSI, Investment, Trading ',
    empType: 'Full Time, Permanent ',
    roleCateogery: 'Lending ',
  },
  skills: [
    'Finance',
    'Business Risk',
    'Management Risk',
    'Finance',
    'Business Risk',
    'Management Risk',
    'SWOT Risk',
  ],
};

export default function JobDetails() {
  const navigation = useNavigation();
  const userData = useSelector(state => state.persistedReducer.preference);
  return (
    <SafeAreaView style={{backgroundColor: 'white', padding: 10}}>
      <Header
        placement="left"
        leftComponent={
          <Pressable
            onPress={() => {
              navigation.openDrawer();
            }}>
            <MenuIcon style={{margin: 5}} />
          </Pressable>
        }
        centerComponent={
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../Assets/HeaderLogo.png')}
              style={{width: 137, height: 32}}
            />
          </View>
        }
        rightComponent={
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 100,
              backgroundColor: '#E8EFF6',
            }}>
            <Image
              source={{uri: userData?.profilePic}}
              style={{
                width: 40,
                height: 40,
                borderRadius: 100,
                backgroundColor: '#E8EFF6',
              }}
            />
          </View>
        }
        containerStyle={{
          backgroundColor: '#ffffff',
          justifyContent: 'center',
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Company Details */}
        <View style={{marginTop: 5}}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>
            {data.detail.title}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 1,
              marginTop: 5,
            }}>
            <Image
              // source={data.detail.companyIcon}
              source={{
                uri: 'https://cdn.muthootfinance.com/sites/default/files/files/mthlogo_29.png',
              }}
              style={{width: 60, height: 40}}
            />
            <View
              style={{
                alignItems: 'flex-start',
                marginLeft: 5,
                flex: 1,
              }}>
              <Text style={{fontSize: 14, fontWeight: '500'}} numberOfLines={2}>
                {data.detail.companyName}
              </Text>
              <Text style={{fontSize: 14, fontWeight: '500'}} numberOfLines={2}>
                {data.detail.location}
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={[
                styles.jobLabel,
                {
                  color: 'white',
                  fontSize: 12,
                  textAlign: 'center',
                  borderRadius: 5,
                },
              ]}>
              {'PERMANENT JOB'}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          {/* Column 1 */}
          <View
            style={{
              minWidth: '40%',
              maxWidth: '50%',
              paddingRight: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 5,
                alignItems: 'center',
              }}>
              <Image
                source={require('../Assets/SandWatch.png')}
                style={{width: 15, height: 15, marginRight: 10}}
              />
              <Text style={styles.textStyle}>
                {data.detail.posted + ' days ago'}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 5,
                alignItems: 'center',
              }}>
              <ViewsBlack style={{marginRight: 10}} />
              <Text style={styles.textStyle}>
                {data.detail.posted + ' Views'}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 5,
                alignItems: 'center',
              }}>
              <Image
                source={require('../Assets/jobId.png')}
                style={{width: 18, height: 18, marginRight: 10}}
              />
              <Text style={styles.textStyle}>
                {'Job ID - ' + data.detail.posted}
              </Text>
            </View>
          </View>
          {/* Column 2 */}
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 5,
                alignItems: 'center',
              }}>
              <ExperiencedIcon width={18} height={18} />
              <Text
                style={[styles.textStyle, {marginLeft: 7}]}
                numberOfLines={1}>
                {data.detail.posted + ' years'}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 5,
                alignItems: 'center',
              }}>
              <Salary width={15} height={15} />
              <Text
                style={[styles.textStyle, {marginLeft: 10}]}
                numberOfLines={1}>
                {data.detail.posted}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 5,
                alignItems: 'center',
              }}>
              <GlobeBlack width={18} height={18} />
              <Text
                style={[styles.textStyle, {marginLeft: 10}]}
                numberOfLines={1}>
                {data.detail.international ? 'International Job' : ''}
              </Text>
            </View>
          </View>
        </View>

        {/* Separator */}
        <View style={styles.separator} />
        {/* Job Description */}
        <View>
          <Text style={styles.title}>{'JOB DESCRIPTION'}</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '50%'}}>
              {/* <Text style={{fontSize: 16, color: '#175DA8', marginVertical: 10}}>
              {'Role'}
            </Text>
            <Text style={{fontSize: 16, color: '#175DA8', marginVertical: 10}}>
              {'Industry Type'}
            </Text>
            <Text style={{fontSize: 16, color: '#175DA8', marginVertical: 10}}>
              {'Functional Area '}
            </Text>
            <Text style={{fontSize: 16, color: '#175DA8', marginVertical: 10}}>
              {'Employment Type '}
            </Text>
            <Text style={{fontSize: 16, color: '#175DA8', marginVertical: 10}}>
              {'Role Cateogery '}
            </Text> */}
            </View>
            <View>
              <Text style={styles.textStyle}>
                {data.jobDescriptionData.role}
              </Text>
              <Text style={styles.textStyle}>
                {data.jobDescriptionData.industryType}
              </Text>
              <Text style={styles.textStyle}>
                {data.jobDescriptionData.functionalArea}
              </Text>
              <Text style={styles.textStyle}>
                {data.jobDescriptionData.empType}
              </Text>
              <Text style={styles.textStyle}>
                {data.jobDescriptionData.roleCateogery}
              </Text>
            </View>
          </View>
        </View>

        {/* Separator */}
        <View style={styles.separator} />

        {/* Key Skills */}
        <View>
          <Text style={styles.title}>{'KEY SKILL(S) REQUIRED'}</Text>
          {/* <FlatList
          data={data.skills}
          renderItem={item => {
            return (
              <View
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 10,
                  backgroundColor: '#E9E9E9',
                  margin: 5,
                  borderRadius: 10,
                }}>
                <Text style={{color: '#9E9E9E'}}>{item}</Text>
              </View>
            );
          }}
          numColumns={3}
        /> */}
        </View>

        {/* Separator */}
        <View style={styles.separator} />

        {/* Recruiter Detail */}
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.title}>{'RECRUITER DETAIL'}</Text>
          <Text style={styles.textStyle}>
            {
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gudolore.'
            }
          </Text>
        </View>

        {/* Separator */}
        <View style={styles.separator} />

        {/* Company Detail */}
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.title}>{'COMPANY DETAIL '}</Text>
          <Text style={styles.textStyle}>
            {
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et '
            }
          </Text>
        </View>

        {/* Separator */}
        <View style={styles.separator} />

        {/* Fully Remote */}
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.title}>{'FULLY REMOTE '}</Text>
          <Text style={styles.textStyle}>
            {
              'You can work on this job any where, as long as have good internet connection. '
            }
          </Text>
        </View>

        {/* Separator */}
        <View style={styles.separator} />

        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.title}>{'YOUR PRICING'}</Text>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../Assets/budgetIcon.png')} />
                <Text>{'Client Budget'}</Text>
              </View>
              <Text style={styles.textStyle}>{'30-40 lakh/year'}</Text>
            </View>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../Assets/peopleIcon.png')} />
                <Text>{'Total Applied'}</Text>
              </View>
              <Text style={styles.textStyle}>{'50 Applicants'}</Text>
            </View>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../Assets/priceTag.png')} />
                <Text>{'Price Range'}</Text>
              </View>
              <Text style={styles.textStyle}>{'30-60 lakh/year'}</Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <Text>{'Current Annual Salary *'}</Text>
              <TextInput style={styles.inputBox} placeholder="Enter Amount" />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>{'Expected Annual Salary'}</Text>
              <TextInput style={styles.inputBox} placeholder="Enter Amount" />
            </View>
          </View>
        </View>

        {/* Separator */}
        <View style={styles.separator} />

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.title}>{'RESUME *'}</Text>
          <View style={styles.UpdateBtn}>
            <Text style={{color: 'black'}}>{'Update Resume'}</Text>
          </View>
          <Text style={{color: 'black'}}>{'SHOW PREVIEW'}</Text>
        </View>

        {/* Separator */}
        <View style={styles.separator} />

        {/* Cover Letter */}
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.title}>{'COVER LETTER *'}</Text>
            <Text style={{color: '#175DA8', fontSize: 14}}>
              {'Why Should You Be Hired For This Role ? '}
            </Text>
          </View>
          <View style={{}}>
            <TextInput
              placeholder="Answer Here"
              multiline={true}
              numberOfLines={4}
              onChangeText={() => {}}
            />
          </View>
          <Text style={{alignSelf: 'flex-end', color: '#9E9E9E'}}>
            {'0/2048'}
          </Text>
        </View>

        {/* Separator */}
        <View style={styles.separator} />

        {/* Add Attachment */}
        {/* <View>
        <Text style={styles.title}>{'ADD ATTACHMENT'}</Text>
      </View> */}

        {/* Buttons */}
        {/* <View>
        <TouchableOpacity>
          <Text>{'Apply'}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>{'Cancel'}</Text>
        </TouchableOpacity>
      </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  jobLabel: {
    paddingHorizontal: 5,
    paddingVertical: 6,
    backgroundColor: '#97B6D8',
  },
  textStyle: {
    fontSize: 12,
    color: '#9E9E9E',
    textAlign: 'auto',
  },
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
    marginVertical: 10,
  },
  inputBox: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#9E9E9E',
    borderRadius: 5,
    margin: 5,
  },
  UpdateBtn: {
    backgroundColor: '#E9E9E9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 5,
  },
  separator: {
    height: 2,
    backgroundColor: '#9E9E9E',
    flex: 1,
    marginVertical: 20,
  },
});

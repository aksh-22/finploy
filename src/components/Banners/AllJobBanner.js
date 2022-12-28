import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import BlueBriefcase from '../../Assets/Svg/BlueBriefcase.svg';
import SaveIcon from '../../Assets/Svg/SaveIcon.svg';
import BlockIcon from '../../Assets/Svg/BlockIcon.svg';
import SearchFile from '../../Assets/Svg/SearchFile.svg';
import BlueLocationIcon from '../../Assets/Svg/BlueLocationIcon.svg';
import BlueOfficeBag from '../../Assets/Svg/BlueOfficeBag.svg';
import BlueRupeeIcon from '../../Assets/Svg/BlueRupeeIcon.svg';
import UserLocationBlue from '../../Assets/Svg/UserLocationBlue.svg';
import Calender from '../../Assets/Svg/Calender.svg';
import CopyRefer from '../../Assets/Svg/CopyRefer.svg';
import ShareRefer from '../../Assets/Svg/ShareRefer.svg';
import {useNavigation} from '@react-navigation/native';
import EndPoints from '../../Utils/EndPoints';
import {RequestAPIAction} from '../../Utils/Config';
import storage from '../../Utils/storage';
import {useSelector} from 'react-redux';

const data = {
  bannerDetails: [
    {
      aboutJob: {
        companyLogo: require('../../Assets/Profile.png'),
        postName: 'REGIONAL CUSTOMER\nMANAGER',
        companyName: 'Muthooth',
        location: 'US, GA',
        views: '20',
        jobType: 'Full Time',
        workMode: 'On Site',
        salary: 'Not Specified',
        experience: '4 - 9',
        tags: ['Finance', 'Buisness Risk', 'Management Risk'],
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labo ...',
      },
      aboutPost: {
        postedHrsAgo: '15',
        deadline: '15',
      },
    },
    {
      aboutJob: {
        companyLogo: require('../../Assets/Profile.png'),
        postName: 'REGIONAL CUSTOMER\nMANAGER',
        companyName: 'Muthooth',
        location: 'US, GA',
        views: '20',
        jobType: 'Full Time',
        workMode: 'On Site',
        salary: 'Not Specified',
        experience: '4 - 9',
        tags: ['Finance', 'Buisness Risk', 'Management Risk'],
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labo ...',
      },
      aboutPost: {
        postedHrsAgo: '15',
        deadline: '15',
      },
    },
    {
      aboutJob: {
        companyLogo: require('../../Assets/Profile.png'),
        postName: 'REGIONAL CUSTOMER\nMANAGER',
        companyName: 'Muthooth',
        location: 'US, GA',
        views: '20',
        jobType: 'Full Time',
        workMode: 'On Site',
        salary: 'Not Specified',
        experience: '4 - 9',
        tags: ['Finance', 'Buisness Risk', 'Management Risk'],
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labo ...',
      },
      aboutPost: {
        postedHrsAgo: '15',
        deadline: '15',
      },
    },
  ],
};

const ReferCard = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 10,
        borderWidth: 2,
        borderColor: '#E9E9E9',
        backgroundColor: '#ffffff',
        padding: 10,
        justifyContent: 'space-between',
      }}>
      <View>
        <Text style={{fontSize: 18, color: '#111111'}}>{'Refer & Earn'}</Text>
        <Text style={{fontSize: 16, color: '#111111', marginVertical: 10}}>
          {'₹ 200 INR'}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <CopyRefer style={{marginHorizontal: 5}} />
        <ShareRefer style={{marginHorizontal: 5}} />
      </View>
    </View>
  );
};

export default function AllJobBanner() {
  const token = useSelector(state => state.persistedReducer.token);
  const [jobList, setJobList] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const getAllJob = async () => {
      if (token) {
        console.log('-----------------useEffect call');
        const result = await RequestAPIAction(
          EndPoints.user.getAllJob,
          'GET',
          null,
          token,
        );
        if (result.code === 200) {
          setJobList(result.response.data.jobList);
        }
      }
    };
    getAllJob();
    return () => {
      console.log('This is getAllJob request');
    };
  }, [token]);

  // Time calculation
  function timeSince(date) {
    var ms = new Date().getTime() - new Date(date).getTime();
    var seconds = Math.floor(ms / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    var months = Math.floor(days / 30);
    var years = Math.floor(months / 12);
    if (seconds < 1) {
      return 'Just now';
    }
    if (seconds < 60) {
      return seconds + 'sec';
    }
    if (minutes < 60) {
      return minutes + 'min';
    }
    if (hours < 24) {
      return hours + 'hrs';
    }
    if (days < 30) {
      return days + 'day';
    }
    if (months < 12) {
      return months + ' month';
    } else {
      return years + 'year';
    }
  }

  return (
    <View>
      <FlatList
        // data={data.bannerDetails}
        data={jobList}
        renderItem={item => {
          // console.log(item.item.title, '--------------------');
          return (
            <View style={{marginHorizontal: 20}}>
              <View style={styles.separator} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Image
                  // source={item.item.aboutJob.companyLogo}
                  source={item.attachments}
                  style={styles.companyLogo}
                />

                <View style={{flex: 1}}>
                  <Text style={styles.postName} numberOfLines={2}>
                    {/* {item.item.aboutJob.postName} */}
                    {item.item?.title}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 10,
                    }}>
                    <Text
                      style={[styles.companyName, {maxWidth: '70%'}]}
                      numberOfLines={1}>
                      {/* {item.item.aboutJob.companyName} */}
                      {'companyName'}
                    </Text>
                    <BlueBriefcase />
                  </View>
                </View>
                <View style={{justifyContent: 'space-between'}}>
                  <View
                    style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <TouchableOpacity activeOpacity={0.4}>
                      <SaveIcon />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.4}>
                      <BlockIcon />
                    </TouchableOpacity>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <SearchFile />
                    <Text
                      style={{
                        fontSize: 14,
                        color: '#6F6F6F',
                      }}>
                      {/* {item.item.aboutJob.views + ' views'} */}
                      {`${item.item.views ? item.item.views : 0} `}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <BlueLocationIcon />
                    <Text
                      style={{
                        marginHorizontal: 10,
                        fontSize: 14,
                        color: '#111111',
                      }}>
                      {/* {item.item.aboutJob.location} */}
                      {item.item?.location}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{marginRight: 30}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: 5,
                      alignItems: 'center',
                    }}>
                    <BlueOfficeBag />
                    <Text style={styles.detailText}>
                      {/* {item.item.aboutJob.jobType} */}
                      {item.item?.jobType}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: 5,
                      alignItems: 'center',
                    }}>
                    <UserLocationBlue />
                    <Text style={styles.detailText}>
                      {/* {item.item.aboutJob.workMode} */}
                      {item.item?.locationPreference}
                    </Text>
                  </View>
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: 5,
                      alignItems: 'center',
                    }}>
                    <BlueRupeeIcon />
                    <Text style={styles.detailText}>
                      {/* {item.item.aboutJob.salary} */}
                      {`${item.item?.minSalary}-${item.item?.maxSalary}`}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: 5,
                      alignItems: 'center',
                    }}>
                    <Calender />
                    <Text style={styles.detailText}>
                      {/* {item.item.aboutJob.experience + ' years'} */}
                      {item.item?.experience + ' years'}
                    </Text>
                  </View>
                </View>
              </View>

              {/* Tags */}
              <FlatList
                // data={item.item.aboutJob.tags}
                data={item.item.requiredSkills}
                renderItem={({item}) => {
                  return (
                    <View style={styles.tags}>
                      <Text style={{color: '#9E9E9E', fontSize: 10}}>
                        {item}
                      </Text>
                    </View>
                  );
                }}
                style={{marginVertical: 10}}
                numColumns={3}
              />
              {/* Description */}
              <View style={{marginVertical: 5, marginBottom: 10}}>
                <Text style={styles.descriptionText} numberOfLines={5}>
                  {/* {item.item.aboutJob.description} */}
                  {item.item?.description}
                </Text>
              </View>

              {/* About Post */}
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{color: '#175DA8', fontSize: 16, fontWeight: '500'}}>
                    {'Posted :'}
                  </Text>
                  <Text style={{marginHorizontal: 5, color: '#111111'}}>
                    {/* {item.item.aboutPost.postedHrsAgo + ' Hrs ago'} */}
                    {timeSince(item.item.createdAt) + ' ago'}
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{color: '#175DA8', fontSize: 16, fontWeight: '500'}}>
                    {'Deadline :'}
                  </Text>
                  <Text style={{marginHorizontal: 5, color: '#111111'}}>
                    {/* {item.item.aboutPost.postedHrsAgo + ' Hrs ago'} */}
                    {/* {item?.deadline + ' Hrs ago'} */}
                    {'24 Hrs'}
                  </Text>
                </View>
              </View>

              {/* Apply Btn */}
              <TouchableOpacity
                style={styles.applyBtn}
                onPress={() => {
                  navigation.navigate('JobDetails', item);
                }}>
                <Text style={{fontSize: 18, color: '#111111'}}>
                  {'Apply Now'}
                </Text>
              </TouchableOpacity>

              {/* Refer Card */}
              <ReferCard />
            </View>
          );
        }}
        ListEmptyComponent={() => {
          return <ActivityIndicator size={'small'} color={'#5969FF'} />;
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  separator: {
    height: 5,
    backgroundColor: '#E9E9E9',
    marginVertical: 20,
    elevation: 3,
    shadowColor: '#111111',
  },
  companyLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#5969FF',
  },
  postName: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    marginLeft: 10,
  },
  companyName: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    marginHorizontal: 10,
  },
  detailText: {
    fontSize: 18,
    color: '#6F6F6F',
    marginHorizontal: 5,
  },
  tags: {
    padding: 8,
    backgroundColor: '#E9E9E9',
    borderRadius: 100,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: '400',
  },
  applyBtn: {
    flex: 1,
    backgroundColor: '#E8EFF6',
    alignItems: 'center',
    borderRadius: 2,
    paddingVertical: 8,
    marginVertical: 10,
  },
});

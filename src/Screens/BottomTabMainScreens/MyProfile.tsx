import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {Header} from 'react-native-elements';

import LeftIcon from '../../Assets/Svg/LeftIcon.svg';
import LogoutIcon from '../../Assets/Svg/LogoutIcon.svg';

import ManRunning from '../../Assets/Svg/ManRunning.svg';
import GreenEllipse from '../../Assets/Svg/GreenEllipse.svg';
import OrangeEllipse from '../../Assets/Svg/OrangeEllipse.svg';
import {useNavigation} from '@react-navigation/native';
import ProfileHeader from '../../components/ProfileHeader';

const data = {
  details: {
    name: 'Jacobe Jones',
    id_No: '539724',
    location: 'Pune',
    pinCode: '410038',
    associateName: 'Arlene McCoy',
    associateId: '139724',
    mobileNumber: '9********3',
  },
};

export default function MyProfile() {
  const navigation = useNavigation();
  const [accepted, setAccepted] = useState(true);
  const [showAllAppliedJobs, setShowAllAppliedJobs] = useState(true);
  const [showPartnersInvolved, setShowPartnersInvolved] = useState(true);
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <ProfileHeader />
      {/* Profile Details */}
      <View style={styles.profileDetailsContainer}>
        <View>
          <Image
            source={require('../../Assets/Profile.png')}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.shareBtn}>
            <Text style={{fontSize: 16, color: 'white', textAlign: 'center'}}>
              {'Share Link'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginVertical: 10, flex: 1, marginRight: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                margin: 10,
                fontSize: 14,
                color: '#111111',
                fontWeight: 'bold',
              }}>
              {data.details.name}
            </Text>
            <View style={styles.acceptedContainer}>
              <Text style={{color: 'white', fontSize: 14}}>
                {accepted ? 'Accepted' : 'Not Accepted'}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', padding: 10, flex: 1}}>
            <View style={{color: '#9E9E9E', justifyContent: 'space-between'}}>
              <Text>{'Candidate Id No : '}</Text>
              <Text>{'Location :'}</Text>
              <Text>{'Associate :'}</Text>
              <Text>{'Associate ID :'}</Text>
              <Text>{'Mobile Number:'}</Text>
            </View>
            <View
              style={{marginHorizontal: 10, justifyContent: 'space-between'}}>
              <Text style={styles.detailsText}>{data.details.id_No}</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.detailsText}>{data.details.location}</Text>
                <Text style={styles.detailsText}>{data.details.pinCode}</Text>
              </View>
              <Text style={styles.detailsText}>
                {data.details.associateName}
              </Text>
              <Text style={styles.detailsText}>{data.details.associateId}</Text>
              <Text style={styles.detailsText}>
                {data.details.mobileNumber}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Progress */}
      <View style={{}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.progressText}>{'Registered'}</Text>
          <Text style={styles.progressText}>{'Details\nUploaded'}</Text>
          <Text style={styles.progressText}>{'Applied\nJob'}</Text>
          <Text style={styles.progressText}>{'Response\nRecieved'}</Text>
          <Text style={styles.progressText}>{'Selected/\nRejected'}</Text>
          <Text style={styles.progressText}>{'Feedback'}</Text>
        </View>

        <View style={styles.progressBar}>
          <GreenEllipse />
          <View style={{backgroundColor: '#4EA647', height: 2, flex: 1}} />
          <GreenEllipse />
          <View style={{backgroundColor: '#4EA647', height: 2, flex: 1}} />
          <GreenEllipse />
          <View style={{backgroundColor: '#4EA647', height: 2, flex: 1}} />
          <GreenEllipse />
          <View style={{backgroundColor: '#4EA647', height: 2, flex: 1}} />
          <ManRunning />
          <View style={{backgroundColor: '#FF8800', height: 1, flex: 1}} />
          <OrangeEllipse />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: '17%',
          }}>
          <Text style={styles.dateText}>{'28 July, 22'}</Text>
          <Text style={styles.dateText}>{'28 July, 22'}</Text>
          <Text style={styles.dateText}>{'2 Aug, 22'}</Text>
          <Text style={styles.dateText}>{'5 Aug, 22'}</Text>
          <Text style={styles.dateText}>{'10 Aug, 22'}</Text>
        </View>
      </View>

      {/* Status */}
      <View>
        <View style={styles.statusBanner}>
          <Text style={{fontSize: 18, color: '#175DA8'}}>{'Status:'}</Text>
          <Text style={{fontSize: 16, color: '#6F6F6F'}}>
            {'Candidate is in the process of interview'}
          </Text>
        </View>
        <View
          style={{
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={{color: '#9E9E9E', fontSize: 16}}>{'Job Type'}</Text>
            <Text style={{color: '#111111', fontSize: 16}}>{'IT'}</Text>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={{color: '#9E9E9E', fontSize: 16}}>
              {'Application\nStatus'}
            </Text>
            <Text style={{color: '#175DA8', fontSize: 16}}>{'Accepted'}</Text>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={{color: '#9E9E9E', fontSize: 16}}>{'Company'}</Text>
            <Text style={{color: '#111111', fontSize: 16}}>{'IonfoTech'}</Text>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={{color: '#9E9E9E', fontSize: 16}}>{'Earnings'}</Text>
            <Text style={{color: '#111111', fontSize: 16}}>{'2000'}</Text>
          </View>
        </View>
      </View>

      {/* All applied Jobs */}
      <View
        style={{
          paddingVertical: 8,
          paddingHorizontal: 20,
          backgroundColor: '#F5F5F5',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: 'black'}}>{'All applied Jobs'}</Text>
        {showAllAppliedJobs ? (
          <Image
            source={require('../../Assets/up.png')}
            style={{height: 20, width: 20}}
            onPress={() => {
              setShowAllAppliedJobs(false);
            }}
          />
        ) : (
          <Image
            source={require('../../Assets/down.png')}
            style={{height: 20, width: 20}}
            onPress={() => {
              setShowAllAppliedJobs(true);
            }}
          />
        )}
      </View>
      {
        // All Jobs Content
      }

      {/* Partners Involved */}
      <View
        style={{
          paddingVertical: 8,
          paddingHorizontal: 20,
          backgroundColor: '#F5F5F5',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: 'black'}}>{'Partners Involved'}</Text>
        {showAllAppliedJobs ? (
          <Image
            source={require('../../Assets/up.png')}
            style={{height: 20, width: 20}}
            onPress={() => {
              setShowPartnersInvolved(false);
            }}
          />
        ) : (
          <Image
            source={require('../../Assets/down.png')}
            style={{height: 20, width: 20}}
            onPress={() => {
              setShowPartnersInvolved(true);
            }}
          />
        )}
      </View>
      {
        // Partners Involved Content
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profileDetailsContainer: {
    padding: 10,
    flexDirection: 'row',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 25,
    margin: 10,
  },
  shareBtn: {
    backgroundColor: '#5185BE',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    marginHorizontal: 15,
  },
  detailsText: {
    fontWeight: 'bold',
    color: 'black',
  },
  acceptedContainer: {
    backgroundColor: '#4EA647',
    alignItems: 'center',
    padding: 8,
    borderRadius: 5,
    flex: 1,
  },
  progressText: {
    margin: 10,
    textAlign: 'center',
    color: 'black',
    fontSize: 12,
  },
  progressBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  dateText: {
    margin: 10,
    textAlign: 'center',
    fontSize: 10,
    color: '#6F6F6F',
  },
  statusBanner: {
    backgroundColor: '#E8EFF6',
    paddingVertical: 5,
    paddingHorizontal: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

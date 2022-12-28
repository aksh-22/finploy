import {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import {colors} from '../../Utils/colors';

const TrackMyCandidate = () => {
  return (
    <View style={{marginTop: 50}}>
      <View style={styles.container}>
        <View style={styles.firstSubContaioner}>
          <Image source={require('../../Assets/image1.png')} />
          <FloatingButton title={'Share Link'} width={'50%'} mt={8} />
        </View>

        <View style={styles.secondSubContainer}>
          <View
            style={[
              styles.container,
              {
                marginTop: 8,
                justifyContent: 'space-between',
                alignItems: 'center',
              },
            ]}>
            <Text style={styles.nameText}>Sam Sam</Text>
            <TouchableOpacity
              style={{
                backgroundColor: colors.primaryGeen,
                paddingVertical: 5,
                borderRadius: 4,
                paddingHorizontal: 5,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Acepted
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={[
              styles.container,
              {marginTop: 8, justifyContent: 'space-between'},
            ]}>
            <Text style={styles.secondInnerText}>Candidate Id No : </Text>
            <Text style={styles.innerText}>539724</Text>
          </View>

          <View
            style={[
              styles.container,
              {marginTop: 8, justifyContent: 'space-between'},
            ]}>
            <Text style={styles.secondInnerText}>Location</Text>
            <Text style={styles.innerText}>Pune 410038</Text>
          </View>

          <View
            style={[
              styles.container,
              {marginTop: 8, justifyContent: 'space-between'},
            ]}>
            <Text style={styles.secondInnerText}>Associate :</Text>
            <Text style={styles.innerText}>Arlene McCoy</Text>
          </View>

          <View
            style={[
              styles.container,
              {marginTop: 8, justifyContent: 'space-between'},
            ]}>
            <Text style={styles.secondInnerText}>Associate ID :</Text>
            <Text style={styles.innerText}>139724</Text>
          </View>

          <View
            style={[
              styles.container,
              {marginTop: 8, justifyContent: 'space-between'},
            ]}>
            <Text style={styles.secondInnerText}>Mobile Number:</Text>
            <Text style={styles.innerText}>9********3</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: colors.lightBlue,
          paddingVertical: 7,
          justifyContent: 'space-evenly',
          marginTop: 18,
        }}>
        <Text style={{color: colors.blue, fontWeight: 'bold'}}>Status:</Text>
        <Text style={{color: colors.gray}}>
          Candidate is in the process of interview
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 15,
        }}>
        <View>
          <Text style={{color: colors.gray}}>Job Type</Text>
          <Text style={{textAlign: 'center'}}>IT</Text>
        </View>

        <View>
          <Text style={{color: colors.gray}}>Application Status</Text>
          <Text style={{color: colors.blue, textAlign: 'center'}}>
            Accepted
          </Text>
        </View>

        <View>
          <Text style={{color: colors.gray}}>Company</Text>
          <Text style={{textAlign: 'center'}}>Infotech</Text>
        </View>

        <View>
          <Text style={{color: colors.gray}}>Earnings</Text>
          <Text style={{textAlign: 'center'}}>2 000</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: colors.rowBg,
          alignItems: 'center',
          paddingLeft: 32,
          paddingRight: 10,
          marginTop: 16,
        }}>
        <Text>All applied Jobs</Text>
        <Text style={styles.plus}>+</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: colors.rowBg,
          alignItems: 'center',
          paddingLeft: 32,
          paddingRight: 10,
          marginTop: 28,
        }}>
        <Text>Partners Involved</Text>
        <Text style={styles.plus}>+</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  firstSubContaioner: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  secondSubContainer: {
    flex: 0.5,
    marginRight: 24,
  },
  nameText: {
    fontWeight: 'bold',
    marginBottom: 6,
    marginTop: 11,
  },
  innerText: {
    textAlign: 'right',
  },
  secondInnerText: {
    color: colors.gray,
  },
  plus: {
    fontSize: 30,
    marginLeft: 5,
  },
});

export default TrackMyCandidate;

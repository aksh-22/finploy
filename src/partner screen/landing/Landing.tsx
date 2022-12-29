import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {hp, wp} from '../../Theme/Dimensions';
import Share from 'react-native-share';
import styles from './landing.style';
import FloatingButton from '../../components/FloatingButton';
import Questions from '../../components/Questions';
import Headerpartner from '../../components/Header-p';
import Partnertabs from '../../Navigators/PartnerTabs';
import Colors from '../../Theme/Colors';

type Props = {};

const Landing = (props: Props) => {
  const myshare = async () => {
    const shareOptions = {
      message:
        'Hi! I have been using an app called Finploy that helps you find best suitable jobs and I think you would like it. please click the  link to download Finploy',
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
    } catch (error) {
      console.log('Error =>', error);
    }
  };

  const data = [
    {
      image: require('./../../Assets/image2.png'),
      description:
        ' I have been working with OptimHire for the last 5 months, and I am making an average income of ₹2,00,000 per month. In July alone I made ₹3,00,000 as commission using OptimHire’s platform. I’ve gotten training and solid support from the team.',
      name: 'Rahul',
      company: 'Finploy, company manager',
    },
    {
      image: require('./../../Assets/image3.png'),
      description:
        ' I have been working with OptimHire for the last 5 months, and I am making an average income of ₹2,00,000 per month. In July alone I made ₹3,00,000 as commission using OptimHire’s platform. I’ve gotten training and solid support from the team.',
      name: 'Rahul',
      company: 'Finploy, company manager',
    },
    {
      image: require('./../../Assets/image4.png'),
      description:
        ' I have been working with OptimHire for the last 5 months, and I am making an average income of ₹2,00,000 per month. In July alone I made ₹3,00,000 as commission using OptimHire’s platform. I’ve gotten training and solid support from the team.',
      name: 'Rahul',
      company: 'Finploy, company manager',
    },
  ];

  const cardData = [
    {
      image: require('./../../Assets/card1.png'),
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat',
      name: ' Invite your contacts',
    },
    {
      image: require('./../../Assets/card2.png'),
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat',
      name: 'They signup',
    },
    {
      image: require('./../../Assets/card3.png'),
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat',
      name: 'You get reward',
    },
  ];

  const renderItem = ({item, index}: any) => {
    return (
      <View
        key={index}
        style={{
          backgroundColor: '#EFF5FB',
          marginVertical: 24,
          marginHorizontal: 16,
          paddingVertical: 24,
          paddingHorizontal: 16,
        }}>
        <Image source={item.image} />
        <Text style={{marginTop: 16, color: Colors.Black}}>
          {item.description}
        </Text>
        <Text style={{fontWeight: 'bold', marginTop: 16, color: Colors.Black}}>
          - {item.name}
        </Text>
        <Text style={{marginTop: 4, color: Colors.Black}}>{item.company}</Text>
      </View>
    );
  };

  const cardItem = ({item, index}: any) => {
    return (
      <View
        key={index}
        style={{
          alignItems: 'center',
          elevation: 4,
          marginVertical: 8,
          marginHorizontal: 16,
          paddingVertical: 24,
          paddingHorizontal: 16,
        }}>
        <Image source={item.image} />
        <Text
          style={{
            fontWeight: 'bold',
            marginTop: 16,
            textAlign: 'center',
            color: Colors.Black,
          }}>
          {item.name}
        </Text>
        <Text style={{marginTop: 4, color: Colors.Black}}>
          {item.description}
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, height: hp(100)}}>
      <Headerpartner />
      <ScrollView style={{backgroundColor: '#FFFFFF', height: hp(100)}}>
        <View style={{backgroundColor: '#FFFFFF', marginTop: hp('8')}}>
          <Text style={styles.text}>Welcome to FINPLOY</Text>
          <Text style={styles.programText}>REFER AND EARN PROGRAM</Text>
          <Image
            style={styles.img}
            source={require('./../../Assets/homeImage.png')}
          />
          <Text style={styles.bottomText}>
            People (just like you) are using FINPLOY to make ₹75,000, ₹1,50,000,
            or even ₹11,00,000 per Hire.
          </Text>

          <View style={styles.subContainer}>
            <TouchableOpacity>
              <FloatingButton
                onpress={() => console.log('first')}
                title={'Share as Partner'}
                width={'100%'}
                mt={40}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.imageContainer}>
            <Image
              style={styles.img}
              source={require('./../../Assets/trustedImage1.png')}
            />
            <Image
              style={styles.img}
              source={require('./../../Assets/trustedImage2.png')}
            />
          </View>

          <Text style={styles.offerText}>
            Refer your friends and Earn Upto 50% per Hire
          </Text>

          <View style={styles.container}>
            <Text style={{color: Colors.Black}}>Affiliate Referral Code</Text>
            <View style={styles.createCodeBtn}>
              <Text style={styles.plus}>+</Text>
              <Text style={[styles.plus, {marginLeft: 10}]}>Create Code</Text>
            </View>
          </View>

          <View style={styles.grayContainer}>
            <Text style={{color: Colors.Black}}>Kritika sharma</Text>
            <TouchableOpacity onPress={myshare}>
              <Image source={require('./../../Assets/Share2.png')} />
            </TouchableOpacity>
          </View>

          <Text style={[styles.programText, {marginTop: hp('4')}]}>
            Results & Testimonials
          </Text>

          {data.map((el, index) => renderItem({item: el, index}))}

          {/* <FlatList data={data} renderItem={renderItem} /> */}

          <Text style={styles.text}>Leaderboard</Text>
          <View style={{alignItems: 'center'}}>
            <Text
              style={[styles.programText, {marginTop: hp('2'), width: '80%'}]}>
              Meet Our Highest-Earning Referrers
            </Text>
          </View>

          <Text style={[styles.text, {marginTop: hp('2')}]}>
            Get inpired, become a leader, start earning toay
          </Text>

          <View style={{alignItems: 'center'}}>
            <Text
              style={[
                styles.programText,
                {marginTop: hp('6'), width: wp('80%')},
              ]}>
              Make ₹ 75,000, ₹1,50,000, or even ₹11,00,000 Per Hire
            </Text>
          </View>

          <View style={{marginHorizontal: 16, marginTop: hp('3')}}>
            <Text style={{color: '#175DA8', fontSize: 16}}>
              Signing a new client or candidate:
              <Text style={{color: 'black', fontSize: 16}}>
                {' '}
                You will earn 50% of the revenue that Optimhire makes as your
                commission on all successful hires, within six months from the
                date of signup via your affiliate link.
              </Text>
            </Text>

            <Text style={{color: '#175DA8', fontSize: 16, marginTop: hp('1')}}>
              Bring an inactive* client or candidate:
              <Text style={{color: 'black', fontSize: 16}}>
                {' '}
                You will earn 25% of the revenue that OptimHire makes as your
                commission on all successful hires, within three months from the
                date of re-login at OptimHire.com via your Affiliate link.
              </Text>
            </Text>
          </View>

          <Text style={[styles.programText, {marginTop: hp('6')}]}>
            How it works?
          </Text>

          {cardData.map((el, index) => cardItem({item: el, index}))}

          <Text
            style={{
              fontWeight: 'bold',
              marginTop: hp('4'),
              marginLeft: wp('4'),
              color: Colors.Black,
            }}>
            FAQ’s
          </Text>
          <Questions />

          <View
            style={{
              marginTop: hp('6'),
              borderTopColor: '#9E9E9E',
              borderWidth: 1,
              borderColor: 'white',
              paddingBottom: 25,
            }}>
            <Text
              style={{
                paddingTop: hp('3'),
                marginLeft: wp('4'),
                textAlign: 'center',
                color: Colors.Black,
              }}>
              Need Help? Call Now:
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 26,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{height: 24, width: 24, borderRadius: 25}}
                  source={require('./../../Assets/flag1.png')}
                />
                <View style={{marginLeft: 20}}>
                  <Text style={{fontWeight: 'bold', color: Colors.Black}}>
                    +1 650 488 5192
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{height: 24, width: 24, borderRadius: 25}}
                  source={require('./../../Assets/flag2.png')}
                />
                <View style={{marginLeft: 20}}>
                  <Text style={{fontWeight: 'bold', color: Colors.Black}}>
                    +44 140 488 5192
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 19,
                alignSelf: 'center',
              }}>
              <Image
                style={{height: 24, width: 24, borderRadius: 25}}
                source={require('./../../Assets/flag3.png')}
              />
              <View style={{marginLeft: 20}}>
                <Text style={{fontWeight: 'bold', color: Colors.Black}}>
                  +91 140 488 5192
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 27,
                alignSelf: 'center',
              }}>
              <Image
                style={{height: 24, width: 24, borderRadius: 25}}
                source={require('./../../Assets/flag4.png')}
              />
              <View style={{marginLeft: 20}}>
                <Text style={{fontWeight: 'bold', color: Colors.Black}}>
                  Hello@finploy.in
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              alignItems: 'center',
              backgroundColor: '#DDDDDD',
              paddingVertical: 24,
              paddingHorizontal: 16,
            }}>
            <Text style={{alignItems: 'center', color: Colors.Black}}>
              Privacy Policy
            </Text>
            <Image
              style={{marginTop: 16}}
              source={require('./../../Assets/logo.png')}
            />
            <View style={{flexDirection: 'row', marginTop: 16}}>
              <Image
                // style={styles.img}
                source={require('./../../Assets/copyright.png')}
              />
              <Text style={{marginLeft: 8, color: Colors.Black}}>
                Copyright 2021 My Remote Developer Inc. 548 Market St/ PMB 60080
                San F5ranise California{' '}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* <Partnertabs /> */}
    </View>
  );
};

export default Landing;

import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import HeaderBar from '../components/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FloatingButton from '../components/FloatingButton';
import Questions from '../components/Questions';
import Share from 'react-native-share';
// import {Header} from 'react-native-elements';
import MenuIcon from '../Assets/Svg/MenuIcon.svg';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import { colors } from '../Utils/colors';
import {Colors} from '../Theme/Allcolors';
import {colors} from '../Utils/colors';
import Footer from '../components/Footer';
import Partnertabs from '../Navigators/PartnerTabs';
import Headerpartner from '../components/Header-p';
const Recruter = () => {
  const data = [
    {
      image: require('../Assets/image2.png'),
      description:
        ' I have been working with OptimHire for the last 5 months, and I am making an average income of ₹2,00,000 per month. In July alone I made ₹3,00,000 as commission using OptimHire’s platform. I’ve gotten training and solid support from the team.',
      name: 'Rahul',
      company: 'Finploy, company manager',
    },
    {
      image: require('../Assets/image3.png'),
      description:
        ' I have been working with OptimHire for the last 5 months, and I am making an average income of ₹2,00,000 per month. In July alone I made ₹3,00,000 as commission using OptimHire’s platform. I’ve gotten training and solid support from the team.',
      name: 'Rahul',
      company: 'Finploy, company manager',
    },
    {
      image: require('../Assets/image4.png'),
      description:
        ' I have been working with OptimHire for the last 5 months, and I am making an average income of ₹2,00,000 per month. In July alone I made ₹3,00,000 as commission using OptimHire’s platform. I’ve gotten training and solid support from the team.',
      name: 'Rahul',
      company: 'Finploy, company manager',
    },
  ];

  const onlWay = [
    {
      uri: '',
      description:
        'Stone Age Tools and a lot of manual work to find candidates',
    },
    {
      uri: '',
      description:
        'Buy Expensive Database Access for the same unmotivated candidates that thousand of other recruiters are vying for',
    },
    {
      uri: '',
      description:
        'Waste 100+ Hours evaluating applicants, scheduling, interviews, and so on',
    },
    {
      uri: '',
      description:
        'Low Income - Regardless of how hard you work, 20k to 50k low-wage employment is a sad reality',
    },
  ];

  const finployWay = () => [
    {
      uri: '',
      description:
        '10X Faster Candidate Search advantage for OptimHire recruiters using our AI powered & data driven platform',
    },
    {
      uri: '',
      description:
        'Get Free Access to a Verified Database of 600,000+ pre-screened, ready-to-hire candidates',
    },
    {
      uri: '',
      description:
        'Save 100+ Hours owing to features like Automated interview scheduling, pre-screened candidate database, WhatsApp Live Chat, and more',
    },
    {
      uri: '',
      description:
        '0X Higher Income for OptimHire recruiters as each clients pays an upfront deposit and your commission releases are automated',
    },
  ];

  const centerLIneDesign = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            height: 115,
            width: 2,
            backgroundColor: 'black',
          }}></View>
        <View
          style={{
            backgroundColor: '#2F2E41',
            borderRadius: 50,
            height: 48,
            width: 48,
            borderWidth: 1,
            borderColor: '#1F1F1F',
            marginVertical: 8,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Vs
          </Text>
        </View>
        <View
          style={{
            height: 75,
            width: 2,
            backgroundColor: 'black',
            marginBottom: 100,
          }}></View>
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          backgroundColor: '#EFF5FB',
          marginVertical: 24,
          marginHorizontal: 16,
          paddingVertical: 24,
          paddingHorizontal: 16,
        }}>
        <Image source={item.image} />
        <Text style={{marginTop: 16}}>{item.description}</Text>
        <Text style={{fontWeight: 'bold', marginTop: 16}}>- {item.name}</Text>
        <Text style={{marginTop: 4}}>{item.company}</Text>
      </View>
    );
  };

  const renderItemss = ({item}) => {
    return (
      <View>
        <Image
          style={{height: 120, width: 120, borderRadius: 50, marginTop: 60}}
          source={require('../Assets/card3.png')}
        />
        <Text style={{marginTop: 16}}>{item.description}</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, height: hp(100)}}>
      <Headerpartner />
      <ScrollView style={{height: hp(100)}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginRight: wp('4'),
              alignItems: 'center',
            }}>
            <Image
              style={{width: wp('8'), height: hp('4'), marginRight: wp('4')}}
              source={require('../Assets/phone.png')}
            />
            <TouchableOpacity
              style={{
                backgroundColor: colors.green,
                paddingHorizontal: wp('8'),
                paddingVertical: hp('1.5'),
                borderRadius: 10,
              }}>
              <Text style={{color: 'white', fontSize: 18}}>Apply</Text>
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor: '#FFFFFF', marginTop: hp('4')}}>
            <Text style={styles.text}>Welcome to FINPLOY</Text>
            <Text style={styles.programText}>
              Full-Time Recruitment Partner Program
            </Text>
            <Image
              style={styles.img}
              source={require('../Assets/homeImage.png')}
            />
            {/* <Text style={styles.bottomText}>People (just like you) are using FINPLOY to make ₹75,000, ₹1,50,000, or even ₹11,00,000 per Hire.</Text> */}

            <View style={styles.subContainer}>
              <FloatingButton title={'Apply now'} width={'100%'} mt={40} />
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#EEF9EF',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              display: 'flex',
              // paddingBottom:hp('8'),
              marginTop: hp('4'),
              marginHorizontal: wp('4'),
              paddingBottom: hp('2'),
            }}>
            <Text
              style={{
                marginTop: hp('2'),
                color: colors.green,
                fontWeight: 'bold',
              }}>
              Program Overview
            </Text>
            <Text style={{marginTop: hp('3'), color: 'black'}}>
              Where Recvruitment Becomes Easier and Income
            </Text>
            <Text style={{color: 'black'}}>Goes 10x higher </Text>
            <Text
              style={{
                marginTop: hp('3'),
                color: colors.green,
                fontWeight: 'bold',
              }}>
              Up to 90%{' '}
            </Text>
            <Text style={{color: colors.green, fontWeight: 'bold'}}>
              commison{' '}
            </Text>
            <Text style={{marginTop: hp('2'), color: 'black'}}>
              You can earn up to 90% commison on each hire{' '}
            </Text>
            <Text
              style={{
                marginTop: hp('3'),
                color: colors.green,
                fontWeight: 'bold',
              }}>
              Earn from Rs70,000{' '}
            </Text>
            <Text style={{color: colors.green, fontWeight: 'bold'}}>
              to Rs 5,00,000{' '}
            </Text>
            <Text
              style={{marginTop: hp('3'), textAlign: 'center', color: 'black'}}>
              You can earn from Rs 70,000 to as high as Rs 5,00,000 and even
              more as commision per hire{' '}
            </Text>
            <Text
              style={{
                marginTop: hp('3'),
                color: colors.green,
                fontWeight: 'bold',
              }}>
              Training, Data, and{' '}
            </Text>
            <Text style={{color: colors.green, fontWeight: 'bold'}}>
              Lead Support
            </Text>
            <Text style={{marginTop: hp('2'), color: 'black'}}>
              Get acess to advanced training, a verified database,{' '}
            </Text>
            <Text style={{color: 'black'}}>and sales & lead support</Text>
          </View>
          <View
            style={{
              marginTop: hp('5'),
              marginHorizontal: wp('4'),
              backgroundColor: '#EFF5FB',
              paddingBottom: hp('2'),
            }}>
            <Image
              style={{
                marginTop: hp('2'),
                marginHorizontal: wp('4'),
                width: wp('12'),
                height: hp('6'),
              }}
              source={require('../Assets/UserProfile.png')}
            />
            <Text
              style={{
                marginTop: hp('2'),
                marginHorizontal: wp('4'),
                color: 'black',
              }}>
              From the Desk of Harsh
            </Text>
            <Text
              style={{
                marginTop: hp('1'),
                marginHorizontal: wp('4'),
                color: 'black',
              }}>
              CEO & Founder, Finploy
            </Text>
            <Text
              style={{
                marginTop: hp('2'),
                marginHorizontal: wp('4'),
                color: 'black',
                textAlign: 'justify',
              }}>
              " I have been working with OptimHire for the last 5 months, and I
              am making an average income of ₹2,00,000 per month. In July alone
              I made ₹3,00,000 as commission using OptimHire’s platform. I’ve
              gotten training and solid support from the team."
            </Text>
            <Text
              style={{
                marginHorizontal: wp('4'),
                color: 'black',
                textAlign: 'justify',
              }}>
              " I have been working with OptimHire for the last 5 months, and I
              am making an average income of ₹2,00,000 per month. In July alone
              I made ₹3,00,000 as commission using OptimHire’s platform. I’ve
              gotten training and solid support fro."
            </Text>
            <Text
              style={{
                marginHorizontal: wp('4'),
                color: 'black',
                textAlign: 'justify',
              }}>
              " I have been working with OptimHire for the last 5 months, and I
              am making an average income of ₹2,00,000 per month. In July alone
              I made ₹3,00,000 as commission using OptimHire’s platform. I’ve
              gotten training and solid support from the team."
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: colors.blue,
                paddingVertical: hp('2'),
                marginTop: hp('2'),
              }}>
              <Text style={{textAlign: 'center', color: 'white'}}>
                Apply Now
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList data={data} renderItem={renderItem} />
          <View
            style={{
              marginTop: hp('5'),
              backgroundColor: '#EFF5FB',
              paddingBottom: hp('2'),
            }}>
            <Text
              style={{
                marginTop: hp('2'),
                textAlign: 'center',
                color: colors.blue,
                fontWeight: 'bold',
                fontSize: 24,
              }}>
              Become a full-time{' '}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                color: colors.blue,
                fontWeight: 'bold',
                fontSize: 24,
              }}>
              Recruitment Partner
            </Text>
            <Text
              style={{
                marginHorizontal: wp('4'),
                marginVertical: hp('2'),
                textAlign: 'justify',
                fontSize: 16,
                color: 'black',
              }}>
              We’re looking for someone with at least one year of experience in
              IT recruitment, who can commit to workng 8 hours a day, and who
              dared to dream BIG.
            </Text>
            <View
              style={{
                marginHorizontal: wp('4'),
                marginTop: hp('2'),
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: hp('2'),
              }}>
              <Text
                style={{
                  fontSize: 24,
                  marginVertical: hp('2'),
                  color: colors.green,
                  fontWeight: 'bold',
                }}>
                Step 1
              </Text>
              <Image
                source={require('../Assets/card1.png')}
                style={{
                  width: wp('20'),
                  height: hp('10'),
                  marginBottom: hp('2'),
                }}></Image>
              <Text style={{color: 'black'}}>
                Click the Apply button, choose your preferred work shift, the
                commission you would want to receive, and submit your
                application.You can earn up to 90% commission for each recruit*
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: wp('4'),
                marginTop: hp('2'),
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: hp('2'),
              }}>
              <Text
                style={{
                  fontSize: 24,
                  marginVertical: hp('2'),
                  color: colors.green,
                  fontWeight: 'bold',
                }}>
                Step 2
              </Text>
              <Image
                source={require('../Assets/card1.png')}
                style={{
                  width: wp('20'),
                  height: hp('10'),
                  marginBottom: hp('2'),
                }}></Image>
              <Text style={{color: 'black'}}>
                One of our executives will contact you to schedule a meeting
                with our success manager. If you are the right fit, you will be
                invited to our paid training program.
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: colors.blue,
                paddingVertical: hp('2'),
                marginTop: hp('2'),
                marginHorizontal: wp('4'),
              }}>
              <Text style={{textAlign: 'center', color: 'white'}}>
                Apply Now
              </Text>
            </TouchableOpacity>
            <View style={{backgroundColor: 'white', marginTop: hp(2)}}>
              <Text
                style={{
                  marginTop: hp(4),
                  color: colors.blue,
                  fontSize: 24,
                  marginHorizontal: wp(4),
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Need More Reasons to Join Finploy?
              </Text>
              <Text
                style={{
                  marginTop: hp(1),
                  color: 'black',
                  fontSize: 14,
                  marginHorizontal: wp(4),
                  textAlign: 'center',
                }}>
                Well, learn the Finploy Difference
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 16,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  marginTop: hp('2'),
                }}>
                <View
                  style={{
                    flex: 0.4,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 24,
                      color: '#175DA8',
                      fontWeight: 'bold',
                      marginBottom: hp(2),
                    }}>
                    Old way
                  </Text>
                  <FlatList
                    data={onlWay}
                    renderItem={renderItemss}
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    style={{marginTop: hp(2)}}
                  />
                </View>

                <View
                  style={{
                    flex: 0.4,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 24,
                      color: '#175DA8',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginBottom: 80,
                    }}>
                    VS
                  </Text>
                  <FlatList
                    data={[1, 2, 3]}
                    renderItem={centerLIneDesign}
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                  />
                </View>

                <View
                  style={{
                    flex: 0.4,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 24,
                      color: '#175DA8',
                      fontWeight: 'bold',
                      marginBottom: hp(2),
                      textAlign: 'center',
                    }}>
                    Finploy Way
                  </Text>
                  <FlatList
                    data={onlWay}
                    renderItem={renderItemss}
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                  />
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: hp('.5'),
              backgroundColor: colors.lightGray,
              paddingBottom: hp('2'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                marginVertical: hp('4'),
                textAlign: 'center',
                color: colors.blue,
                fontWeight: 'bold',
                fontSize: 24,
              }}>
              WHY JOIN US?{' '}
            </Text>
            <Text style={{color: 'black'}}>
              Why IT Recruiters (LIKE YOU) Are Using OptimHire:
            </Text>
            <Text
              style={{
                color: 'black',
                marginVertical: hp('2'),
                marginHorizontal: wp('4'),
              }}>
              To fill their calendars with high-paying opportunities that could
              help them UPLEVEL their recruitment journey and earn as BIG as Rs
              70,000, Rs 1,50,000, Rs 2,00,000, and more on each hire.
            </Text>
            <Text
              style={{
                color: 'black',
                marginVertical: hp('1'),
                marginHorizontal: wp('4'),
              }}>
              With the OptimHire Full-Time Recruitment Partner Program, you can
              enjoy the following perks:
            </Text>
            <View>
              <Text
                style={{
                  color: 'black',
                  marginTop: hp('1'),
                  marginHorizontal: wp('4'),
                }}>
                1. Earn a whopping commission of up to 90%
              </Text>
              <Text style={{color: 'black', marginHorizontal: wp('4')}}>
                2. Free access to OptimHire’s exclusive database of candidates
              </Text>
              <Text style={{color: 'black', marginHorizontal: wp('4')}}>
                3. Intuitive, AI-powered platform functions to optimize the
                hiring process
              </Text>
              <Text style={{color: 'black', marginHorizontal: wp('4')}}>
                4. A high-end system for tracking and managing your hiring
                process
              </Text>
              <Text style={{color: 'black', marginHorizontal: wp('4')}}>
                5. Solid sales and lead qualification support
              </Text>
              <Text style={{color: 'black', marginHorizontal: wp('4')}}>
                6. Qualified clients and high paying jobs that start from Rs
                1,00,000 for Indian clients and from $ 5000 for US clients
              </Text>
              <Text style={{color: 'black', marginHorizontal: wp('4')}}>
                7. No platform charges , No joining fees
              </Text>
            </View>
          </View>

          <View
            style={{
              marginTop: hp('.5'),
              backgroundColor: 'white',
              paddingBottom: hp('2'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                marginVertical: hp('4'),
                textAlign: 'center',
                color: colors.blue,
                fontSize: 16,
              }}>
              Who Makes a Good Partner? YOU
            </Text>
            <View
              style={{
                marginHorizontal: wp(4),
                backgroundColor: colors.lightGray,
                paddingHorizontal: wp(10),
              }}>
              <Image
                style={{marginTop: hp('2'), width: wp('6'), height: hp('3')}}
                source={require('../Assets/tick1.png')}
              />
              <Text
                style={{
                  marginVertical: hp('2'),
                  textAlign: 'left',
                  color: 'black',
                  fontSize: 16,
                  marginHorizontal: wp(0),
                }}>
                Individuals who are enthusiastic about IT recruitment and have
                at least 1 year of experience
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: wp(4),
                backgroundColor: colors.lightGray,
                paddingHorizontal: wp(10),
                marginTop: hp(1),
              }}>
              <Image
                style={{marginTop: hp('2'), width: wp('6'), height: hp('3')}}
                source={require('../Assets/tick1.png')}
              />
              <Text
                style={{
                  marginVertical: hp('2'),
                  textAlign: 'left',
                  color: 'black',
                  fontSize: 16,
                  marginHorizontal: wp(0),
                }}>
                Individuals who are enthusiastic about IT recruitment and have
                at least 1 year of experience
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: wp(4),
                backgroundColor: colors.lightGray,
                paddingHorizontal: wp(10),
                marginTop: hp(1),
              }}>
              <Image
                style={{marginTop: hp('2'), width: wp('6'), height: hp('3')}}
                source={require('../Assets/tick1.png')}
              />
              <Text
                style={{
                  marginVertical: hp('2'),
                  textAlign: 'left',
                  color: 'black',
                  fontSize: 16,
                  marginHorizontal: wp(0),
                }}>
                Individuals who are enthusiastic about IT recruitment and have
                at least 1 year of experience
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: wp(4),
                backgroundColor: colors.lightGray,
                paddingHorizontal: wp(10),
                marginTop: hp(1),
              }}>
              <Image
                style={{marginTop: hp('2'), width: wp('6'), height: hp('3')}}
                source={require('../Assets/tick1.png')}
              />
              <Text
                style={{
                  marginVertical: hp('2'),
                  textAlign: 'left',
                  color: 'black',
                  fontSize: 16,
                  marginHorizontal: wp(0),
                }}>
                Individuals who are enthusiastic about IT recruitment and have
                at least 1 year of experience
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingVertical: hp(4),
              paddingHorizontal: wp(0),
              backgroundColor: colors.blue,
              marginTop: hp(2),
            }}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
              We are looking for 25 dedicated Full-Time Recruitment Partners. If
              you wish to attain professional success and are eligible to become
              an OptimHire Partner, then fill the form below and our Success
              Manager will get in touch with you.
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: colors.green,
                paddingVertical: hp('2'),
                marginTop: hp('2'),
                marginHorizontal: wp('4'),
              }}>
              <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>
                Apply Now
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              paddingVertical: hp(4),
              paddingHorizontal: wp(0),
              backgroundColor: colors.lightBlue,
              marginTop: hp(2),
              marginHorizontal: wp(4),
            }}>
            <Text
              style={{
                color: colors.blue,
                textAlign: 'center',
                fontSize: 16,
                marginHorizontal: wp(24),
              }}>
              Do you have questions? We have answers.
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: colors.green,
                paddingVertical: hp('1.5'),
                marginTop: hp('2'),
                marginHorizontal: wp('28'),
                borderRadius: 10,
              }}>
              <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>
                Book a Call
              </Text>
            </TouchableOpacity>
          </View>
          <Footer />
        </View>
      </ScrollView>
      <View style={{marginBottom: hp(8), backgroundColor: 'white'}}>
        <Partnertabs />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    marginHorizontal: wp('4'),
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingVertical: hp('3.8'),
    marginTop: hp('3'),
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
  },
  programText: {
    fontSize: 24,
    textAlign: 'center',
    color: '#175DA8',
    fontWeight: 'bold',
  },
  img: {
    alignSelf: 'center',
    marginTop: hp('3'),
  },
  bottomText: {
    marginTop: hp('3'),
    paddingHorizontal: wp('4'),
    color: 'black',
  },
  subContainer: {
    paddingHorizontal: wp('4'),
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: hp('3'),
  },
  offerText: {
    fontSize: 16,
    color: '#175DA8',
    fontWeight: 'bold',
    paddingLeft: 16,
    marginTop: hp('3.4'),
  },
  createCodeBtn: {
    flexDirection: 'row',
    borderColor: '#4EA647',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: wp('3'),
    paddingVertical: hp('.6'),
  },
  plus: {
    color: '#4EA647',
  },
  lineStyle: {
    borderWidth: 3,
    borderColor: 'black',
    margin: 10,
  },
  grayContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    marginHorizontal: wp('4'),
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingVertical: hp('3.8'),
    borderTopColor: '#CCCCCC',
    borderWidth: 1,
    borderColor: '#F1F1F1',
  },
});

export default Recruter;

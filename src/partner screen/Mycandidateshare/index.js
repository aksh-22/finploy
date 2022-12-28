import { View, Text,Image,StyleSheet,TouchableOpacity,ScrollView } from 'react-native'
import React,{useState} from 'react'
import {Header} from 'react-native-elements'

import LeftIcon from '../../Assets/Svg/LeftIcon.svg'
import LogoutIcon from '../../Assets/Svg/LogoutIcon.svg'

import ManRunning from '../../Assets/Svg/ManRunning.svg';
import GreenEllipse from '../../Assets/Svg/GreenEllipse.svg';
import OrangeEllipse from '../../Assets/Svg/OrangeEllipse.svg';
import { colors } from '../../Utils/colors'
import { useNavigation } from '@react-navigation/native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const data = {
  details:{
    name:"Jacobe Jones",
    id_No:"539724",
    location:"Pune",
    pinCode:"410038",
    associateName:"Arlene McCoy",
    associateId:"139724",
    mobileNumber:"9********3",
  },
}

export default function Mycandidateshare() {
  const navigation = useNavigation();
  const [accepted, setAccepted] = useState(true)
  const [showAllAppliedJobs, setShowAllAppliedJobs] = useState(true)
  const [showPartnersInvolved, setShowPartnersInvolved] = useState(true)
  return (
    <View style={{backgroundColor:'white', flex:1}}>
       <Header
          placement='left'
          leftComponent={<LeftIcon onPress={()=>{navigation.goBack()}}/>}
          centerComponent={
            <View style={{alignItems:'center', margin:wp(2.3)}}>
              <Text style={{color: 'black',fontSize:16,fontWeight:'bold'}}>{'My Candidate'}</Text>
            </View>
          }
          rightComponent={
            <View style={{alignItems:'center', margin:wp(2.2)}}>
              <LogoutIcon style={{width:wp(6),height:hp(3)}}/>
            </View>
          }
          containerStyle={{
            backgroundColor: '#E9E9E9',
            alignContent:'center'
          }}
      />
      {/* Profile Details */}
      <ScrollView>
      <View style={styles.profileDetailsContainer}>
        <View>
          <Image source = {require('../../Assets/Profile.png')} style={styles.profileImage}/>
          <TouchableOpacity style={styles.shareBtn}>
            <Text style={{fontSize:16,color:'white',textAlign:'center'}}>{'Share Link'}</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginVertical:hp(1.2), flex:1,marginRight:wp(5)}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={{margin:wp(2.2), fontSize:14,color:'#111111',fontWeight:'bold'}}>{data.details.name}</Text>
            <View style={styles.acceptedContainer}>
              <Text style={{color:'white', fontSize:14}}>{accepted?'Accepted':'Not Accepted'}</Text>
            </View>
          </View>
          <View style={{flexDirection:'row',padding:wp(2),padding:hp(1), flex:1,}}>
            <View style={{color:'#9E9E9E',justifyContent:'space-between'}}>
              <Text>{'Candidate Id No : '}</Text>
              <Text>{'Location :'}</Text>
              <Text>{'Associate :'}</Text>
              <Text>{'Associate ID :'}</Text>
              <Text>{'Mobile Number:'}</Text>
            </View>
            <View style={{marginHorizontal:wp(2.5),justifyContent:'space-between'}}>
              <Text style={styles.detailsText}>{data.details.id_No}</Text>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.detailsText}>{data.details.location}</Text>
                <Text style={styles.detailsText}>{data.details.pinCode}</Text>
              </View>
              <Text style={styles.detailsText}>{data.details.associateName}</Text>
              <Text style={styles.detailsText}>{data.details.associateId}</Text>
              <Text style={styles.detailsText}>{data.details.mobileNumber}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Progress */}
     
      <View style={{marginTop:hp(1)}}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={styles.progressText}>{'Registered'}</Text>
          <Text style={styles.progressText}>{'Details\nUploaded'}</Text>
          <Text style={styles.progressText}>{'Applied\nJob'}</Text>
          <Text style={styles.progressText}>{'Response\nRecieved'}</Text>
          <Text style={styles.progressText}>{'Selected/\nRejected'}</Text>
          <Text style={styles.progressText}>{'Feedback'}</Text>
        </View>

        <View style={styles.progressBar}>
            <GreenEllipse />
            <View  style={{backgroundColor:'#4EA647',height:2,flex:1}}/>
            <GreenEllipse />
            <View  style={{backgroundColor:'#4EA647',height:2,flex:1}}/>
            <GreenEllipse />
            <View  style={{backgroundColor:'#4EA647',height:2,flex:1}}/>
            <GreenEllipse />
            <View  style={{backgroundColor:'#4EA647',height:2,flex:1}}/>
            <ManRunning />
            <View  style={{backgroundColor:'#FF8800',height:1,flex:1}}/>
            <OrangeEllipse />
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-between',marginRight:wp("15"),}}>
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
            <Text style={{fontSize:18, color:'#175DA8'}}>{'Status:'}</Text>
            <Text style={{fontSize:16, color:'#6F6F6F'}}>{'Candidate is in the process of interview'}</Text>
          </View>
          <View style={{padding:wp(5), flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{alignItems:'center',justifyContent:'space-between'}}>
              <Text style={{color:'#9E9E9E', fontSize:16}}>{'Job Type'}</Text>
              <Text style={{color:'#111111', fontSize:16}}>{'IT'}</Text>
            </View>
            <View style={{alignItems:'center',justifyContent:'space-between'}}>
              <Text style={{color:'#9E9E9E', fontSize:16}}>{'Application\nStatus'}</Text>
              <Text style={{color:'#175DA8', fontSize:16}}>{'Accepted'}</Text>
            </View>
            <View style={{alignItems:'center',justifyContent:'space-between'}}>
              <Text style={{color:'#9E9E9E', fontSize:16}}>{'Company'}</Text>
              <Text style={{color:'#111111', fontSize:16}}>{'IonfoTech'}</Text>
            </View>
            <View style={{alignItems:'center',justifyContent:'space-between'}}>
              <Text style={{color:'#9E9E9E', fontSize:16}}>{'Earnings'}</Text>
              <Text style={{color:'#111111', fontSize:16}}>{'2000'}</Text>
            </View>
          </View>
          <View style={{height:hp(.5),marginHorizontal:wp(5),backgroundColor:'lightgrey'}}></View>
        </View>



        <View style={{marginTop:hp(1)}}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={styles.progressText}>{'Registered'}</Text>
          <Text style={styles.progressText}>{'Details\nUploaded'}</Text>
          <Text style={styles.progressText}>{'Applied\nJob'}</Text>
          <Text style={styles.progressText}>{'Response\nRecieved'}</Text>
          <Text style={styles.progressText}>{'Selected/\nRejected'}</Text>
          <Text style={styles.progressText}>{'Feedback'}</Text>
        </View>

        <View style={styles.progressBar}>
            <GreenEllipse />
            <View  style={{backgroundColor:'#4EA647',height:2,flex:1}}/>
            <GreenEllipse />
            <View  style={{backgroundColor:'#4EA647',height:2,flex:1}}/>
            <GreenEllipse />
            <View  style={{backgroundColor:'#4EA647',height:2,flex:1}}/>
            <GreenEllipse />
            <View  style={{backgroundColor:'#4EA647',height:2,flex:1}}/>
            <ManRunning />
            <View  style={{backgroundColor:'#FF8800',height:1,flex:1}}/>
            <OrangeEllipse />
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-between',marginRight:wp("15"),}}>
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
            <Text style={{fontSize:18, color:'#175DA8'}}>{'Status:'}</Text>
            <Text style={{fontSize:16, color:'#6F6F6F'}}>{'Candidate is in the process of interview'}</Text>
          </View>
          <View style={{padding:wp(5), flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{alignItems:'center',justifyContent:'space-between'}}>
              <Text style={{color:'#9E9E9E', fontSize:16}}>{'Job Type'}</Text>
              <Text style={{color:'#111111', fontSize:16}}>{'IT'}</Text>
            </View>
            <View style={{alignItems:'center',justifyContent:'space-between'}}>
              <Text style={{color:'#9E9E9E', fontSize:16}}>{'Application\nStatus'}</Text>
              <Text style={{color:'#175DA8', fontSize:16}}>{'Accepted'}</Text>
            </View>
            <View style={{alignItems:'center',justifyContent:'space-between'}}>
              <Text style={{color:'#9E9E9E', fontSize:16}}>{'Company'}</Text>
              <Text style={{color:'#111111', fontSize:16}}>{'IonfoTech'}</Text>
            </View>
            <View style={{alignItems:'center',justifyContent:'space-between'}}>
              <Text style={{color:'#9E9E9E', fontSize:16}}>{'Earnings'}</Text>
              <Text style={{color:'#111111', fontSize:16}}>{'2000'}</Text>
            </View>
          </View>
          <View style={{height:hp(.5),marginHorizontal:wp(5),backgroundColor:'lightgrey'}}></View>
        </View>

        <View style={{marginTop:hp(1)}}>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={styles.progressText}>{'Registered'}</Text>
          <Text style={styles.progressText}>{'Details\nUploaded'}</Text>
          <Text style={styles.progressText}>{'Applied\nJob'}</Text>
          <Text style={styles.progressText}>{'Response\nRecieved'}</Text>
          <Text style={styles.progressText}>{'Selected/\nRejected'}</Text>
          <Text style={styles.progressText}>{'Feedback'}</Text>
        </View>

        <View style={styles.progressBar}>
            <GreenEllipse />
            <View  style={{backgroundColor:'#4EA647',height:2,flex:1}}/>
            <GreenEllipse />
            <View  style={{backgroundColor:'#4EA647',height:2,flex:1}}/>
            <GreenEllipse />
            <View  style={{backgroundColor:'#4EA647',height:2,flex:1}}/>
            <GreenEllipse />
            <View  style={{backgroundColor:'#4EA647',height:2,flex:1}}/>
            <ManRunning />
            <View  style={{backgroundColor:'#FF8800',height:1,flex:1}}/>
            <OrangeEllipse />
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-between',marginRight:wp("15"),}}>
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
            <Text style={{fontSize:18, color:'#175DA8'}}>{'Status:'}</Text>
            <Text style={{fontSize:16, color:'#6F6F6F'}}>{'Candidate is in the process of interview'}</Text>
          </View>
          <View style={{padding:wp(5), flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{alignItems:'center',justifyContent:'space-between'}}>
              <Text style={{color:'#9E9E9E', fontSize:16}}>{'Job Type'}</Text>
              <Text style={{color:'#111111', fontSize:16}}>{'IT'}</Text>
            </View>
            <View style={{alignItems:'center',justifyContent:'space-between'}}>
              <Text style={{color:'#9E9E9E', fontSize:16}}>{'Application\nStatus'}</Text>
              <Text style={{color:'#175DA8', fontSize:16}}>{'Accepted'}</Text>
            </View>
            <View style={{alignItems:'center',justifyContent:'space-between'}}>
              <Text style={{color:'#9E9E9E', fontSize:16}}>{'Company'}</Text>
              <Text style={{color:'#111111', fontSize:16}}>{'IonfoTech'}</Text>
            </View>
            <View style={{alignItems:'center',justifyContent:'space-between'}}>
              <Text style={{color:'#9E9E9E', fontSize:16}}>{'Earnings'}</Text>
              <Text style={{color:'#111111', fontSize:16}}>{'2000'}</Text>
              
            </View>
            
          </View>
          <View style={{height:hp(.5),marginHorizontal:wp(5),backgroundColor:'lightgrey',marginBottom:hp(2)}}></View>
        </View>
       
        <View style={styles.rowMainContainer}>
                <View style={styles.rowContainer}>
                    <Text style={styles.plus}>-</Text>
                    {/* <Image source = {require('../../Assets/Profile.png')}/> */}
                    <Text style={styles.names}>Ralph Edwards</Text>
                    <Text style={{ fontWeight: 'bold' }}>(5)</Text>
                </View>

                <View style={styles.rowSecondContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={styles.grayText}>Par. Id: </Text>
                        <Text style={styles.grayText}>1241204</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={styles.grayText}>Pune</Text>
                        <Text style={[styles.grayText, { marginLeft: wp('3') }]}>23</Text>
                    </View>
                </View>

                <View style={styles.rowThirdContainer}>
                    <Text style={{ color: colors.green }}>1000 000</Text>
                    <Text style={{ color: colors.blue }}>1000 000</Text>
                </View>
            </View>

            <View style={styles.rowMainContainer}>
                <View style={styles.rowContainer}>
                    <Text style={styles.plus}>-</Text>
                    {/* <Image source = {require('../../Assets/Profile.png')}/> */}
                    <Text style={styles.names}>Ralph Edwards</Text>
                    <Text style={{ fontWeight: 'bold' }}>(5)</Text>
                </View>

                <View style={styles.rowSecondContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={styles.grayText}>Par. Id: </Text>
                        <Text style={styles.grayText}>1241204</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={styles.grayText}>Pune</Text>
                        <Text style={[styles.grayText, { marginLeft: wp('3') }]}>23</Text>
                    </View>
                </View>

                <View style={styles.rowThirdContainer}>
                    <Text style={{ color: colors.green }}>1000 000</Text>
                    <Text style={{ color: colors.blue }}>1000 000</Text>
                </View>
            </View>

            

        </ScrollView>


        {/* All applied Jobs */}
        {/* <View style={{paddingVertical:hp(1),paddingHorizontal:wp(5), backgroundColor:'#F5F5F5',flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{color:'black'}}>{'All applied Jobs'}</Text>
          {showAllAppliedJobs?
          <Image 
            source={require('../../Assets/up.png')} 
            style={{height:hp(2.5),width:wp(5)}}
            onPress ={()=>{setShowAllAppliedJobs(false)}}
          />
          :
          <Image 
            source={require('../../Assets/down.png')} 
            style={{height:hp(2.5),width:wp(5)}}
            onPress ={()=>{setShowAllAppliedJobs(true)}}
            />
          }
        </View> */}
        {
          // All Jobs Content
        }

        {/* Partners Involved */}
        {/* <View style={{paddingVertical:8,paddingHorizontal:20, backgroundColor:'#F5F5F5',flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{color:'black'}}>{'Partners Involved'}</Text>
          {showAllAppliedJobs?
          <Image 
            source={require('../../Assets/up.png')} 
            style={{height:hp(2.5),width:wp(5)}}
            onPress ={()=>{setShowPartnersInvolved(false)}}
          />
          :
          <Image 
            source={require('../../Assets/down.png')} 
            style={{height:hp(2.5),width:wp(5)}}
            onPress ={()=>{setShowPartnersInvolved(true)}}
            />
          }
        </View> */}
        {
          // Partners Involved Content
        }
      
    </View>
  )
}

const styles = StyleSheet.create({
  profileDetailsContainer:{
    padding:wp(2.5),
    padding:hp(1.2),
    flexDirection:'row',
  },
  profileImage:{
    width:100,
    height:100,
    borderRadius:25,
    margin:wp(2.5),
    margin:hp(1.2)
  },
  shareBtn:{
    backgroundColor:'#5185BE',
    padding:wp(2.5),
    padding:hp(1.2),
    borderRadius:5,
    margin:wp(2.5),
    margin:hp(1.2),
    marginHorizontal:15,
    
  },
  detailsText:{
    fontWeight:'bold',
    color:'black'
  },
  acceptedContainer:{
    backgroundColor:'#4EA647',
    alignItems:'center',
    padding:wp(2),
    padding:hp(1),
    borderRadius:5,
    flex:1,
  },
  progressText:{
    margin:wp(2.5),
    margin:hp(1.2),
    marginRight:wp(1.5),
    marginLeft:wp(1.5),
    textAlign:'center',
    color:'black',
    fontSize:12,
  },
  progressBar:{
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal:30,
  },
  dateText:{
    margin:wp(2.5),
    margin:hp(1.2),
    textAlign:'center',
    fontSize:10,
    color:'#6F6F6F',
  },
  statusBanner:{
    backgroundColor:'#E8EFF6', 
    paddingVertical:hp(.6),
    paddingHorizontal:wp(10), 
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },

  rowMainContainer: {
    flexDirection: 'row',
    backgroundColor: colors.rowBg,
    marginTop: hp('.5'),
    padding: 5,
    borderColor: colors.lightGray,
    borderWidth: 1
},
rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:colors.rowBg,
    // marginTop:20,
    flex: 0.6
},
plus: {
    fontSize: 30,
    marginLeft: wp('1')
},
names: {
    fontWeight: 'bold',
    marginHorizontal: wp('4')
},
rowSecondContainer: {
    flex: 0.3,
    // paddingRight: 13
},
rowThirdContainer: {
    flex: 0.2,
    alignItems: 'flex-end',
    marginRight: 5
},
grayText: {
    color: colors.gray,
}

})
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../Utils/colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Footer = ()=>{
    return(
        <View>
            
            <View style={{ marginTop: hp('6'),borderTopColor:colors.gray,borderWidth:1,borderColor:'white',paddingBottom:hp('3') }}>
                    <Text style={{ paddingTop: hp('3'), marginLeft: wp('4'), textAlign: 'center' }}>Need Help? Call Now:</Text>
          

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly',marginTop:26 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={{ height: hp('3'), width: wp('6'), borderRadius: 25 }}
                            source={require('../../Assets/flag1.png')}
                        />
                        <View style={{ marginLeft: wp('5') }}>
                            <Text style={{ fontWeight: 'bold' }}>+1 650 488 5192</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={{ height: hp('3'), width: wp('6'), borderRadius: 25 }}
                            source={require('../../Assets/flag2.png')}
                        />
                        <View style={{ marginLeft: wp('5')  }}>
                            <Text style={{ fontWeight: 'bold' }}>+44 140 488 5192</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 19,alignSelf:'center' }}>
                    <Image
                        style={{ height: hp('3'), width: wp('6'), borderRadius: 25 }}
                        source={require('../../Assets/flag3.png')}
                    />
                    <View style={{ marginLeft: wp('5')  }}>
                        <Text style={{ fontWeight: 'bold' }}>+91 140 488 5192</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 27,alignSelf:'center' }}>
                    <Image
                        style={{ height: hp('3'), width: wp('6'), borderRadius: 25 }}
                        source={require('../../Assets/flag4.png')}
                    />
                    <View style={{ marginLeft: wp('5')  }}>
                        <Text style={{ fontWeight: 'bold' }}>Hello@finploy.in</Text>
                    </View>
                </View>

                </View>

                <View style={{ alignItems: 'center', backgroundColor: colors.footerBg,paddingVertical:24,paddingHorizontal:16 }}>
                    <Text style={{ alignItems: 'center' }}>Privacy Policy</Text>
                    <Image
                        style={{marginTop:hp('2')}}
                        source={require('../../Assets/logo.png')}
                    />
                    <View style={{ flexDirection: 'row' ,marginTop:hp('2')}}>
                        <Image
                            // style={styles.img}
                            source={require('../../Assets/copyright.png')}
                        />
                        <Text style={{ marginLeft: wp('2') }}>Copyright 2021 My Remote Developer Inc. 548 Market St/ PMB 60080 San F5ranise California </Text>
                    </View>
                </View>
        </View>
    )
}
export default Footer;
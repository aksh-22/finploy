import { FlatList, Image, ScrollView, Text, View } from "react-native"
import Card from "../components/Card"
import Footer from "../components/Footer";
import Questions from "../components/Questions";
import { colors } from "../Utils/colors";
import {Header} from 'react-native-elements';
import MenuIcon from '../Assets/Svg/MenuIcon.svg';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { utils } from "react-native-gifted-chat";

const Talents = () => {
    const data = [
        {
            language: 'Java',
            amoubt: '60905'
        },
        {
            language: 'Javascript',
            amoubt: '60905'
        },
        {
            language: 'Android',
            amoubt: '60905'
        },
        {
            language: 'REact',
            amoubt: '60905'
        }
    ]

    const renderItem = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp('4'), paddingHorizontal: wp('3'), paddingVertical: hp('2.6') }}>
                <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: colors.blue, }}>{item.language}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={require('../Assets/linkIcon.png')}
                        />
                        <Text style={{ marginLeft: wp('1.8'), color: colors.blue }}>{item.amoubt}+</Text>
                    </View>
                </View>
                <View style={{ flex: 0.4, alignItems: 'flex-end', marginRight: wp('5') }}>
                    <Image
                        source={require('../Assets/grayShare.png')}
                    />
                </View>
            </View>
        )
    }
    return (
        <View>
        <Header
        placement="left"
        leftComponent={<MenuIcon style={{margin: 5}} />}
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
              height: 32,
              width: 32,
              borderRadius: 32,
              backgroundColor: '#175DA8',
            }}></View>
        }
        containerStyle={{
          backgroundColor: '#ffffff',
          justifyContent: 'center',
        }}
      />
        <ScrollView>
            <View style={{backgroundColor:'#ffffff'}}>
                <Card headerText={'Talents'} text={'Find jobs fort his talents  and earn upto 7 crore commison'} url={require('../Assets/card1.png')} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp('4'), paddingHorizontal: wp('3'), paddingVertical: hp('1.5'), backgroundColor: colors.cardBg, marginTop: hp('3') }}>
                    <View style={{ flex: 0.7, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Tech./Skills</Text>
                        <Text style={{ marginLeft: wp('1.9'), fontSize: 16, fontWeight: 'bold' }}>No. of talents</Text>
                    </View>
                    <View style={{ flex: 0.4, alignItems: 'flex-end', marginRight: 20, fontWeight: 'bold' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Share</Text>

                    </View>
                </View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                />
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: wp('4'), marginTop: hp('6') }}>FAQ's</Text>
                <Questions />
                <Footer />
            </View>
        </ScrollView>
        </View>

    )
}

export default Talents;
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import Card from "../../components/Card"
import Footer from "../../components/Footer"
import HeaderBar from "../../components/Header"
import Questions from "../../components/Questions"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { colors } from "../../Utils/colors"
import Partnertabs from "../../Navigators/partnertabs"
import Headerpartner from "../../components/Header-p"

const Tutorials = () => {
    const data = [
        {
            url: require('../../Assets/laptop1.png'),
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
            url: require('../../Assets/laptop2.png'),
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
            url: require('../../Assets/laptop3.png'),
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        }
    ]

    const renderItem = ({ item }) => {
        return (
            <View style={{ alignItems: 'center' }}>
                <Image
                    style={{ marginTop: hp('3') }}
                    source={item.url}
                />
                <Text style={{ marginTop: hp('2') }}>{item.description}</Text>
            </View>
        )
    }
    return (
        <View style={{flex:1,height:hp(100)}}>
        <Headerpartner/>
        <ScrollView style={{backgroundColor:'white',height:hp(100)}}>
            <View style={{marginTop: hp('4')}}>
                <Card headerText={'Tutorials'} text={'Join the webinar to learn more about Affiliate'} url={require('../../Assets/card1.png')} />
                <View style={{
                    height:hp('6'),marginTop:hp('2'),
                    borderColor:colors.blue,borderWidth:1,
                    marginLeft:wp('4'),marginRight:wp('4'),display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
                <TouchableOpacity style={{height:hp('6'),justifyContent:'center',alignItems:'center'}}>
                    <Text style={{textAlign:'center',color:colors.blue}}>Getting started</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:hp('6'),justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:colors.blue,paddingHorizontal:wp('6'),backgroundColor:colors.blue}}>
                    <Text style={{textAlign:'center',color:'white'}}>Tutorials</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:hp('6'),justifyContent:'center',alignItems:'center'}}>
                    <Text style={{textAlign:'center',color:colors.blue}}>FAQ’s</Text>
                </TouchableOpacity>
                </View>
                <FlatList
                    style={{marginTop: hp('2')}}
                    data={data}
                    renderItem={renderItem}
                />
                <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: wp('4'), marginTop: hp('6') }}>FAQ's</Text>
                <Questions />
                <Footer />
            </View>
          
        </ScrollView>
        <View style={{marginBottom:hp(8),backgroundColor:'white'}}>
        <Partnertabs/>
        </View>
        </View>
    )
}

export default Tutorials;
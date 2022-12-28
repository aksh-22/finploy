import { StyleSheet } from "react-native";
import { colors } from "../../Utils/colors";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor:colors.cardBg,
        marginHorizontal:wp('4'),
        marginTop:hp('8.2'),
        borderRadius:8,
        paddingBottom: hp('4'),
        paddingLeft: wp('4'),
        paddingRight:wp('6'),
        marginBottom: hp('3')
    },
    mainText:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:hp('3'),
        textAlign:'center'
    },
    subText:{
        fontSize:14,
        marginTop:hp('2')
    },
    cardSubContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:hp('3.6')
    },
    cardText:{
        fontSize:14,
    },
    cardNumber:{
        fontSize:16,
        fontWeight:'bold'
    },
    title:{
        fontSize:16,
        marginLeft:wp('4'),
        fontWeight:'bold',
        marginTop:hp('4')
    },
    tableHeaderText:{
        fontSize:16,
        fontWeight:'bold',
        padding:12,
        paddingRight:wp('6'),
        backgroundColor:'#EEF6FF'
        // width:'100%'
    },
    tableContent:{
        fontSize:14,
        padding:12,
        paddingRight:wp('6'),
    },
    lableText:{
        margin:10,
        marginRight:wp('6'),
        fontSize:14,
        color:'#2E5AAC',
        borderColor:'#2E5AAC',
        borderWidth:0.5,
        borderRadius:2,
        textAlign:'center',
        paddingVertical:3,
        paddingHorizontal:wp('3')
    }
})

export default styles;
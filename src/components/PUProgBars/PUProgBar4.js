import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

import ManRunning from '../../Assets/Svg/ManRunning.svg';
import GreenEllipse from '../../Assets/Svg/GreenEllipse.svg';
import OrangeEllipse from '../../Assets/Svg/OrangeEllipse.svg';

export default function PUProgBar4(){
    return(
        <View style={{marginBottom:20}}>
        <View style={styles.progressBar}>
            <GreenEllipse />
            <View  style={{backgroundColor:'#4EA647',height:2,width:50}}/>
            <GreenEllipse />
            <View  style={{backgroundColor:'#4EA647',height:2,width:45}}/>
            <GreenEllipse />
            <View  style={{backgroundColor:'#4EA647',height:2,flex:1}}/>
            <GreenEllipse />
            <View  style={{backgroundColor:'#4EA647',height:2,flex:1}}/>
            <ManRunning />
            <View  style={{backgroundColor:'#FF8800',height:1,flex:1}}/>
            <OrangeEllipse />
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{color:'#175DA8', fontWeight:'bold'}}>About Us</Text>
            <Text style={{color:'#175DA8', fontWeight:'bold'}}>Experience</Text>
            <Text style={{color:'#175DA8', fontWeight:'bold'}}>Skills</Text>
            <Text style={{color:'#175DA8', fontWeight:'bold'}}>Education</Text>
            <Text style={{color:'#175DA8', fontWeight:'bold'}}>Social</Text>
            <Text style={{color:'#175DA8', fontWeight:'bold'}}>Complete</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    progressBar:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:20,
    },
})
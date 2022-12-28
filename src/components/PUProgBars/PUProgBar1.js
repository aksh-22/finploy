import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

import ManRunning from '../../Assets/Svg/ManRunning.svg';
import BlueEllipse  from '../../Assets/Svg/BlueEllipse.svg';

export default function PUProgBar1(){
    return(
        <View style={{marginBottom:20}}>
        <View style={styles.progressBar}>
            <ManRunning />
            <View  style={{backgroundColor:'#FF8800',height:1,flex:1,margin:5}}/>
            <BlueEllipse />
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{color:'#175DA8', fontWeight:'bold'}}>About Us</Text>
            <Text style={{color:'#175DA8', fontWeight:'bold'}}>Experience</Text>
        </View>
        </View>
    )
}



const styles = StyleSheet.create({
    progressBar:{
        flexDirection:'row',
        alignItems:'center',
    },
})
import { Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

export default function GreenBtn({text}) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        borderRadius:5,
        backgroundColor:'#4EA647',
        padding: 5,
        paddingHorizontal:10,
        alignItems:'center'
    },
    btnText:{
        color:'#F3F3F3',
        fontWeight:'bold',
        fontSize:14,
    }

})
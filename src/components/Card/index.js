import { Image, StyleSheet, Text, View } from "react-native"
import { colors } from "../../Utils/colors";

const Card = ({ headerText,text,url }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>{headerText}</Text>
            <Text style={styles.text}>{text}</Text>
            <Image
                style={styles.image}
                source={url}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:colors.cardBg,
        margin:16,
        borderRadius:8,
        paddingBottom:33
    },
    mainText:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:24
    },
    text:{
        width:'70%',
        marginTop:8,
        textAlign:'center'
    },
    image:{
        marginTop:24
    }
})
export default Card;
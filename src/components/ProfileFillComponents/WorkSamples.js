import Rext from 'react'
import {View, Text, StyleSheet, Modal, TextInput,FlatList, TouchableOpacity} from 'react-native'

const Button = (btnText) =>{
    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>{btnText}</Text>
        </TouchableOpacity>
    )
}


export default WorkSamples = ()=>{
    const [modalVisible, setModalVisible] = useState(true);
    return(
        <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View>
            <View>
                <Text>{'Work Amples/Portfolio'}</Text>
                <TouchableOpacity>
                    {getIcons(Icons.BLACKCROSS, wp(3))}    
                </TouchableOpacity>
            </View>

            {/* Input Box */}
            <TextInput 
                placeholder='Paste the link here'
                textContentType='URL'
                style={styles.inputBox}
            />

            <Text style={styles.textContent}>
            Your work samples could be in the form of social media posts, presentations, documents, website etc. If you have multiple work samples, upload them to google drive and add the link here.
            </Text>
            

            {/* Save Button */}
            <View style={{alignContent:'flex-end'}}>
                <Button btnText={'Save'}/>
            </View>

        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    inputBox:{
        borderWidth:1,
        borderRadius:8,
        borderColor:'#6F6F6F'
    },
    textContent:{
        fontSize:14,
        color:'#6F6F6F',
        textAlign:'justify'

    },
    button:{
        backgroundColor:'#175DA8',
        paddingVertical:8,
        paddingHorizontal:16
    },
    btnText:{
        fontSize:16,
        fontWeight:500,
        color:'#FFFFFF'
    },
})


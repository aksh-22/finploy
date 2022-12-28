import Rext from 'react'
import {View, Text, StyleSheet, Modal, TextInput,FlatList, TouchableOpacity} from 'react-native'

const Button = (btnText) =>{
    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>{btnText}</Text>
        </TouchableOpacity>
    )
}

export default Accomplishments = ()=>{
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
                <Text>{'Your Accomplishments/More Details'}</Text>
                <TouchableOpacity>
                    {getIcons(Icons.BLACKCROSS, wp(3))}    
                </TouchableOpacity>
            </View>

            {/* Input Box */}
            <TextInput 
                placeholder='write your accomplishments'
                textContentType='URL'
                style={styles.inputBox}
            />

            <Text style={styles.textContent}>
            Add your accomplishments such as rewards, recognitions, test scores, certifications, etc. here. 
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




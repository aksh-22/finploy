import Rext from 'react'
import {View, Text, StyleSheet, Modal, TextInput,FlatList, TouchableOpacity} from 'react-native'

const options = [
    {id:1, option:'Beginner'},
    {id:2, option:'Intermediate'},
    {id:3, option:'Advance'},
]

const Button = (btnText) =>{
    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>{btnText}</Text>
        </TouchableOpacity>
    )
}

export default Skills = ()=>{
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
                <Text>{'Skills'}</Text>
                <TouchableOpacity>
                    {getIcons(Icons.BLACKCROSS, wp(3))}    
                </TouchableOpacity>
            </View>

            <TextInput
                placeholder=''
                style={ styles.inputBox } 
            />
            
        </View>

        <View style={{flex:1}}>
            <Text style={{textAlign:'center', color:'#111111', fontSize:16, fontWeight:500}}>How would you rate your skills?</Text>
        </View>

        <FlatList 
            data={options}
            renderItem={(item)=>{
                return(
                    <TouchableOpacity style={styles.option}>
                        <Text style={styles.optionText}>{item.item.option}</Text>
                    </TouchableOpacity>
                )
            }}
        />

        {/* Save Button */}
        <View style={{alignContent:'flex-end'}}>
            <Button btnText={'Save'}/>
        </View>

        
      </Modal>
    )
}

const styles = StyleSheet.create({
    inputBox:{
        paddingHorizontal:19,
        paddingVertical:12,
        borderWidth:1,
        borderColor:'#6F6F6F',
        borderRadius: 8,
    },
    option:{
        marginVertical:10,
    },
    optionText:{
        fontSize:14,
        color:'#6F6F6F',

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



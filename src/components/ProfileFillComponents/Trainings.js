import Rext from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'

import {getIcons, Icons} from '../../Assets/Svg/Icons';
import { Dropdown } from 'react-native-element-dropdown';
import CheckBox from '@react-native-community/checkbox';

const Button = (btnText) =>{
    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>{btnText}</Text>
        </TouchableOpacity>
    )
}

const dropdownData = [
    {label:'Item 1', value: '1'},
    {label:'Item 2', value: '2'},
    {label:'Item 3', value: '3'},
    {label:'Item 4', value: '4'},
    {label:'Item 5', value: '5'},

]

export default Trainings = ()=>{
    const [modalVisible, setModalVisible] = useState(true);
    const [isCheckBoxSelected, setCheckBoxSelection] = useState(false);
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
                <Text>{'Trainings'}</Text>
                <TouchableOpacity>
                    {getIcons(Icons.BLACKCROSS, wp(3))}    
                </TouchableOpacity>
            </View>

            {/* Training Program */}
            <Text>Training Program {<Text style={{color:'#EB182E'}}>*</Text>}</Text>
            <View>
                <Dropdown 
                    data={dropdownData}
                    placeholder={'Postgraduate degree - Masters'}
                    placeholderStyle={{color:'#9E9E9E'}}
                    containerStyle={{
                        paddingHorizontal:19,
                        paddingVertical:12,
                        borderWidth:1,
                        borderColor:'#6F6F6F',
                        borderRadius:8,
                    }}
                />
            </View>

            {/* Organisation */}
            <Text>Organisation {<Text style={{color:'#EB182E'}}>*</Text>}</Text>
            <View>
                <TextInput 
                    placeholder='State bank of India'
                    style={styles.inputBox}
                />
            </View>
            {/* Check box Online*/}
            <View style={styles.checkboxContainer}>
            <CheckBox
                onCheckColor={'#175DA8'}
                value={isCheckBoxSelected}
                onValueChange={setCheckBoxSelection}
                style={styles.checkbox}
            />
            <Text style={styles.label}>{'Online'}</Text>
            </View>

            {/* Duration */}
            <View>
                <View>
                    <Text>{'Start Date'}</Text>
                    <TextInput 
                        placeholder={'05/2020'}
                        placeholderTextColor={'#9E9E9E'}
                        style={styles.inputBox}
                    />
                </View>
                <View style={{width:20}}/>
                <View>
                    <Text>{'End Date'}</Text>
                    <TextInput 
                        placeholder={'05/2020'}
                        placeholderTextColor={'#9E9E9E'}
                        style={styles.inputBox}
                    />
                </View>
            </View>

            {/* Description */}
            <Text>Description {<Text style={{color:'#EB182E'}}>*</Text>}</Text>
            <View>
                <TextInput 
                    placeholder='Short description'
                    style={styles.inputBox}
                />
            </View>

            {/* Button */}
            <View>
                <Button btnText={'Save'}/>
            </View>

        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: 'center',
        margin: 5,
        borderRadius: 5,
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
    inputBox:{
        paddingVertical:14,
        paddingHorizontal:24,
        flex:1,
        borderWidth:1,
        borderRadius:8,
        borderColor:'#6F6F6F',
        marginVertical:10
    }
})



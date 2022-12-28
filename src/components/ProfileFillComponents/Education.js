import {React,useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {getIcons, Icons} from '../../Assets/Svg/Icons';
import {Dropdown} from 'react-native-element-dropdown';
import CheckBox from '@react-native-community/checkbox';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Button = btnText => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.btnText}>{btnText}</Text>
    </TouchableOpacity>
  );
};

const dropdownData = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
];

export default Education = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [isCheckBoxSelected, setCheckBoxSelection] = useState(false);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}>
      <View>
        <View>
          <Text>{'Education'}</Text>
          <TouchableOpacity>
            {getIcons(Icons.BLACKCROSS, wp(3))}
          </TouchableOpacity>
        </View>

        {/* Education Level */}
        <Text>Education Level {<Text style={{color: '#EB182E'}}>*</Text>}</Text>
        <View>
          <Dropdown
            data={dropdownData}
            placeholder={'Postgraduate degree - Masters'}
            placeholderStyle={{color: '#9E9E9E'}}
            containerStyle={{
              paddingHorizontal: 19,
              paddingVertical: 12,
              borderWidth: 1,
              borderColor: '#6F6F6F',
              borderRadius: 8,
            }}
          />
        </View>

        {/* Feild of Study */}
        <Text>Feild of Study {<Text style={{color: '#EB182E'}}>*</Text>}</Text>
        <View>
          <TextInput
            placeholder="CA"
            style={{
              borderWidth: 1,
              borderColor: '#6F6F6F',
              borderRadius: 8,
              paddingHorizontal: 19,
              paddingVertical: 14,
            }}
          />
        </View>

        {/* Graduation year */}
        <Text>Graduation Year {<Text style={{color: '#EB182E'}}>*</Text>}</Text>
        <View>
          <TextInput
            placeholder="CA"
            style={{
              borderWidth: 1,
              borderColor: '#6F6F6F',
              borderRadius: 8,
              paddingHorizontal: 19,
              paddingVertical: 14,
            }}
          />
        </View>

        {/* Check box for women*/}
        <View style={styles.checkboxContainer}>
          <CheckBox
            onCheckColor={'#175DA8'}
            value={isCheckBoxSelected}
            onValueChange={setCheckBoxSelection}
            style={styles.checkbox}
          />
          <Text style={styles.label}>
            {'I am a student or have recently graduated'}
          </Text>
        </View>

        {/* Location */}
        <Text>Location</Text>
        <View>
          <TextInput
            placeholder="Hyderabad"
            style={{
              borderWidth: 1,
              borderColor: '#6F6F6F',
              borderRadius: 8,
              paddingHorizontal: 19,
              paddingVertical: 14,
            }}
          />
        </View>

        {/* Educational Establishment */}
        <Text>
          Educational Establishment {<Text style={{color: '#EB182E'}}>*</Text>}
        </Text>
        <View>
          <TextInput
            placeholder=""
            style={{
              borderWidth: 1,
              borderColor: '#6F6F6F',
              borderRadius: 8,
              paddingHorizontal: 19,
              paddingVertical: 14,
            }}
          />
        </View>

        <View>
        <TouchableOpacity style={styles.button}>
      <Text style={styles.btnText}>Save</Text>
    </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

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
  button: {
    backgroundColor: '#175DA8',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  btnText: {
    fontSize: 16,
    // fontWeight: 500,
    color: '#FFFFFF',
  },
});

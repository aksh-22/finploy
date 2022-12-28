import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import PUProgBar5 from '../../components/PUProgBars/PUProgBar5';

import GrayCrossIcon from '../../Assets/Svg/GrayCrossIcon.svg';
import GrayPlusIcon from '../../Assets/Svg/GrayPlusIcon.svg';

import SkipBtn from '../../components/Buttons/SkipBtn';
import NextBtn from '../../components/Buttons/NextBtn';
import CheckBox from '@react-native-community/checkbox';

export default function ProfileUpdate9() {
  const [tempArray, setTempArray] = useState([]);
  const [isCheckBoxSelected, setCheckBoxSelection] = useState(false);
  const [inputText, setInputText] = useState('');
  const [prefJobType, setPrefJobType] = useState([
    {
      id: 1,
      selected: true,
      text: 'Sales',
    },
    {
      id: 2,
      selected: false,
      text: 'Management',
    },
  ]);
  const [prefEmpType, setPrefEmpType] = useState([
    {
      id: 1,
      selected: true,
      text: 'Full Time',
    },
    {
      id: 2,
      selected: false,
      text: 'Contract',
    },
    {
      id: 3,
      selected: false,
      text: 'Intern',
    },
    {
      id: 4,
      selected: false,
      text: 'Part Time',
    },
    {
      id: 5,
      selected: false,
      text: 'Temporary',
    },
    {
      id: 6,
      selected: false,
      text: 'Other',
    },
  ]);

  const [prefWorkArrangement, setPrefWorkArrangement] = useState([
    {
      id: 1,
      selected: true,
      text: 'In Office',
    },
    {
      id: 2,
      selected: false,
      text: 'Remote',
    },
    {
      id: 3,
      selected: false,
      text: 'Hybrid',
    },
    {
      id: 4,
      selected: false,
      text: 'Flexible',
    },
    {
      id: 5,
      selected: false,
      text: 'Temporarily Remote',
    },
  ]);

  const [prefLocation, setPrefLocation] = useState([
    'Chennei',
    'Bengaluru',
    'Delhi',
  ]);
  const [suggestedLocation, setSuggestedLocation] = useState([
    'Kolkata',
    'Pune',
    'Noida',
    'Mumbai',
  ]);

  const handleJobSelection = ({item}) => {
    console.log(item);
    setPrefJobType((item.selected = !item.selected));
    console.log(prefJobType);
    {
      item.selected ? (
        <SelectedCardEllipse item={item} />
      ) : (
        <UnselectedCardEllipse item={item} />
      );
    }
  };

  const removeSelectedLocation = location => {
    setPrefLocation(prefLocation.filter(item => item != location));
  };

  // SelectedCardEllipse
  const SelectedCardEllipse = item => {
    return (
      <View
        style={{
          borderRadius: 25,
          paddingHorizontal: 16,
          paddingVertical: 8,
          backgroundColor: '#E8EFF6',
          borderWidth: 1,
          borderColor: '#175DA8',
          flexDirection: 'row',
          alignItems: 'center',
          margin: 5,
        }}>
        <Text style={{color: 'black', fontSize: 18}}>{item.item.text}</Text>
        <TouchableOpacity
          onPress={() => {
            handleJobSelection(item);
          }}>
          <GrayCrossIcon style={{marginLeft: 10}} />
        </TouchableOpacity>
      </View>
    );
  };
  //UnselectedCardEllipse
  const UnselectedCardEllipse = item => {
    return (
      <View
        style={{
          borderRadius: 25,
          paddingHorizontal: 16,
          paddingVertical: 8,
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: '#175DA8',
          flexDirection: 'row',
          alignItems: 'center',
          margin: 5,
        }}>
        <Text style={{color: 'black', fontSize: 18}}>{item.item.text}</Text>
        <TouchableOpacity onPress={() => {}}>
          <GrayPlusIcon style={{marginLeft: 10}} />
        </TouchableOpacity>
      </View>
    );
  };
  //SelectedCardBox
  const SelectedCardBox = item => {
    return (
      <View
        style={{
          borderRadius: 5,
          paddingHorizontal: 16,
          paddingVertical: 8,
          backgroundColor: '#E8EFF6',
          borderWidth: 1,
          borderColor: '#175DA8',
          flexDirection: 'row',
          alignItems: 'center',
          margin: 5,
        }}>
        <Text style={{color: 'black', fontSize: 18}}>{item.item.text}</Text>
        <TouchableOpacity onPress={() => {}}>
          <GrayCrossIcon style={{marginLeft: 10}} />
        </TouchableOpacity>
      </View>
    );
  };

  //UnselectedCardBox
  const UnselectedCardBox = item => {
    return (
      <View
        style={{
          borderRadius: 5,
          paddingHorizontal: 16,
          paddingVertical: 8,
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: '#175DA8',
          flexDirection: 'row',
          alignItems: 'center',
          margin: 5,
        }}>
        <Text style={{color: 'black', fontSize: 18}}>{item.item.text}</Text>
        <TouchableOpacity onPress={() => {}}>
          <GrayPlusIcon style={{marginLeft: 10}} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 20,
        paddingTop: 20,
        flex: 1,
        backgroundColor: 'white',
      }}>
      {/* Progress Bar 1 */}
      <PUProgBar5 />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Preffered Type */}
        <Text style={styles.title}>{'Preffered Type'}</Text>

        {/* Preffered Job Type */}
        <Text style={styles.subTitle}>{'Preffered Job Type'}</Text>
        <FlatList
          data={prefJobType}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <>
                {item.selected ? (
                  <SelectedCardEllipse item={item} />
                ) : (
                  <UnselectedCardEllipse item={item} />
                )}
              </>
            );
          }}
        />

        {/* Preffered Employment Type */}
        <Text style={styles.subTitle}>{'Preffered Employment Type'}</Text>

        <FlatList
          data={prefEmpType}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <>
                {item.selected ? (
                  <SelectedCardBox item={item} />
                ) : (
                  <UnselectedCardBox item={item} />
                )}
              </>
            );
          }}
        />

        {/* Preffered Work Arrangement */}
        <Text style={styles.subTitle}>{'Preffered Work Arrangement'}</Text>

        <FlatList
          data={prefWorkArrangement}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <>
                {item.selected ? (
                  <SelectedCardEllipse item={item} />
                ) : (
                  <UnselectedCardEllipse item={item} />
                )}
              </>
            );
          }}
        />

        {/* Preffered Location (Maximum 3) */}
        <Text style={styles.subTitle}>{'Preffered Location (Maximum 3)'}</Text>
        <FlatList
          data={prefLocation}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  borderRadius: 25,
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  backgroundColor: '#E8EFF6',
                  borderWidth: 1,
                  borderColor: '#175DA8',
                  flexDirection: 'row',
                  alignItems: 'center',
                  margin: 5,
                }}>
                <Text style={{color: 'black', fontSize: 18}}>{item}</Text>
                <GrayCrossIcon
                  style={{marginLeft: 10}}
                  onPress={() => {
                    removeSelectedLocation(item);
                  }}
                />
              </View>
            );
          }}
        />

        <TextInput
          placeholder="eg: Kolkata, banglore, hyderabad, delhi"
          style={styles.inputBox}
          onChangeText={text => {
            setInputText(text);
          }}
          onSubmitEditing={() => {
            inputText == ''
              ? alert('Please Enter a Location...!')
              : setPrefLocation([inputText, ...prefLocation]);
          }}
        />

        {/* Suggestions: */}
        <Text style={styles.subTitle}>{'Suggestions:'}</Text>
        <FlatList
          data={suggestedLocation}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  borderRadius: 25,
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  borderWidth: 1,
                  borderColor: '#175DA8',
                  flexDirection: 'row',
                  alignItems: 'center',
                  margin: 5,
                }}>
                <Text style={{color: 'black', fontSize: 18}}>{item}</Text>
                <GrayPlusIcon
                  style={{marginLeft: 10}}
                  onPress={() => {
                    setPrefLocation([item, ...prefLocation]);
                  }}
                />
              </View>
            );
          }}
        />

        {/* Check box for women*/}
        <View style={styles.checkboxContainer}>
          <CheckBox
            onCheckColor={'#175DA8'}
            value={isCheckBoxSelected}
            onValueChange={setCheckBoxSelection}
            style={styles.checkbox}
          />
          <Text style={styles.label}>{'for Women'}</Text>
        </View>

        {/* Buttons */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <SkipBtn screen={'HomeNavigator'} />
          <NextBtn screen={'ProfileUpdate10'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'black',
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 16,
    color: 'black',
    marginVertical: 10,
  },
  inputBox: {
    marginVertical: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 24,
    paddingHorizontal: 20,
    height: 35,
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderColor: '#9E9E9E',
  },

  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
    margin: 5,
    borderRadius: 5,
  },
  label: {
    margin: 5,
    alignSelf: 'center',
    color: 'black',
    fontSize: 16,
  },
});

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Colors from './../Theme/Colors';

interface CProps {
  leftClick?: any;
  RightClick?: any;
}

export default function SliderButton(Props: CProps) {
  const {leftClick, RightClick} = Props;
  const [Active, SetActive] = useState(false);
  return (
    <View style={styles.searchBarContainer}>
      <TouchableOpacity
        onPress={() => {
          SetActive(Active ? false : true);
          leftClick;
        }}
        style={Active ? styles.Active : styles.InActive}>
        <Text style={Active ? styles.TextActive : styles.TextInActive}>
          All messages
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          SetActive(Active ? false : true);
          RightClick;
        }}
        style={!Active ? styles.Active : styles.InActive}>
        <Text style={Active ? styles.TextInActive : styles.TextActive}>
          Unread (0)
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth: 0.3,
    borderRadius: 30,
    borderColor: '#111111',
    marginBottom: 13,
  },
  searchBarTextfield: {
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    color: 'black',
    padding: 10,
  },
  Active: {
    backgroundColor: Colors.Blue,
    padding: 12,
    paddingHorizontal: 19,
    borderRadius: 20,
  },
  InActive: {
    padding: 12,
    borderRadius: 20,
  },
  TextActive: {
    fontSize: 9,
    lineHeight: 10,
    textAlign: 'center',
    color: Colors.white,
  },
  TextInActive: {
    fontSize: 9,
    lineHeight: 10,
    textAlign: 'center',
    color: Colors.Black,
  },
});

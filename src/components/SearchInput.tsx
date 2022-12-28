import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import Colors from '../Theme/Colors';
import {wp} from '../Theme/Dimensions';

export default function SearchInput() {
  return (
    <View style={styles.searchBarContaner}>
      <TextInput
        placeholder="Select minimum of 2 industries"
        style={styles.serchBarTextfield}
        onChange={() => {}}
        placeholderTextColor="gray"
      />
      <Text>Cancel</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarContaner: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.Black,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  serchBarTextfield: {
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    color: 'black',
    padding: 10,
    width: wp(60),
    borderColor: Colors.Black,
  },
});

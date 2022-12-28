import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

interface CProps {
  onPress?: any;
}

export default function SearchBar(props: CProps) {
  const {onPress} = props;
  return (
    <TouchableOpacity
      activeOpacity={5}
      onPress={onPress}
      style={styles.searchBarContaner}>
      <TextInput
        placeholder="Search Jobs"
        style={styles.serchBarTextfield}
        editable={false}
        placeholderTextColor="gray"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  searchBarContaner: {
    height: 70,
    backgroundColor: '#E8EFF6',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  serchBarTextfield: {
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    color: 'black',
    padding: 10,
  },
});

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import { colors } from '../../Utils/colors';
import {Colors} from '../../Theme/Allcolors';

const FloatingButton = ({title, width, mt, onpress}) => {
  return (
    <TouchableOpacity style={{width: width, marginTop: mt}} onPress={onpress}>
      <Text style={styles.container}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#175DA8',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 3,
    paddingVertical: 10,
    borderRadius: 4,
  },
});

export default FloatingButton;

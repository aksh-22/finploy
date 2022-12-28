import {StyleSheet} from 'react-native';
import Colors from '../../Theme/Colors';

export default StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: Colors.border,
    padding: 10,
    alignItems: 'center',
  },
  btnText: {
    color: '#0C0C0C',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  listConatiner: {
    backgroundColor: '#C1E1D7',
    height: width / 4,
    width: width / 4 - 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  listIcon: {height: 42, width: 42},
  listText: {
    fontSize: 14,
    opacity: 0.6,
    textAlign: 'center',
  },
});

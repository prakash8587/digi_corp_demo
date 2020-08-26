import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e2e2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  headerText: {fontSize: 20, fontWeight: 'bold'},
  headerImage: {width: 20, height: 20, marginRight: 8},
  headerHelpText: {
    fontSize: 14,
    color: '#339e7b',
    textDecorationLine: 'underline',
  },
  headerTextImage: {flexDirection: 'row', position: 'absolute', right: 16},
});

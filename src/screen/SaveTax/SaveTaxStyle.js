import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFF',
  },
  img: {
    flex: 0.6,
    width: '100%',
  },
  backArrow: {
    position: 'absolute',
    zIndex: 1,
    top: Platform.OS === 'android' ? 20 : 60,
    left: 16,
    height: 30,
    width: 30,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backImg: {height: 16, width: 16},
});

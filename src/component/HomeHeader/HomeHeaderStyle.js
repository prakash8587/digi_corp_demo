import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: '#339e7b',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  logoImage: {height: 30, width: 100, borderRadius: 20},
  referView: {
    borderColor: '#143F31',
    borderWidth: 0.3,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  referImage: {width: 15, height: 15},
  referText: {
    color: '#fff',
    fontSize: 11,
    opacity: 0.7,
    marginHorizontal: 8,
  },
  referAmountView: {
    borderRadius: 20,
    backgroundColor: '#287E62',
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  referAmountText: {color: '#fff', fontSize: 11, opacity: 0.7},
  referAmountImage: {width: 8, height: 8},
  imageView: {
    position: 'absolute',
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationImage: {width: 20, height: 20, marginHorizontal: 10},
  menuImage: {width: 20, height: 20},
});

import {StyleSheet, Dimensions, Platform} from 'react-native';
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  blogView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  blogTopText: {fontSize: 16, fontWeight: 'bold'},
  blogTopTextRight: {fontSize: 14, color: '#3498DB'},
  blogFunView: {
    alignItems: 'center',
    marginTop: 10,
  },
  blogFunImageView: {
    alignItems: 'center',
    marginTop: 80,
  },
  blogFunImage: {
    height: 10,
    width: 10,
  },
  blogFunTopText: {fontSize: 14, fontWeight: 'bold'},
  blogFunBottomText: {fontSize: 12, opacity: 0.6, marginTop: 12},
  blogContainer: {
    height: Platform.OS === 'ios' ? height - 180 : height - 130,
    padding: 16,
    paddingTop: 24,
  },
});

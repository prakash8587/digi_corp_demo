import {StyleSheet, Dimensions} from 'react-native';
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  assistanceContainer: {
    height: height / 2,
    padding: 16,
    paddingTop: 24,
    alignItems: 'center',
    backgroundColor: '#e2e2e2',
  },
  assistanceTopText: {fontSize: 16},
  assistanceMiddleText: {fontSize: 13, opacity: 0.6, marginTop: 10},
  userImageView: {flexDirection: 'row', alignItems: 'center', marginTop: 12},
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
    borderColor: '#212121',
    borderWidth: 0.3,
  },
  talkChatView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
  },
  phoneImage: {width: 13, height: 13},
  phoneText: {fontSize: 14, color: '#339e7b', marginLeft: 10},
  chatImage: {width: 13, height: 13, marginLeft: 15},
  chatText: {fontSize: 14, color: '#339e7b', marginLeft: 10},
  routineText: {fontSize: 10, marginTop: 20, opacity: 0.6},
});

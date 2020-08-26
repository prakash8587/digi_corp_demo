import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    padding: 16,
    marginTop: 4,
    backgroundColor: '#fff',
  },
  line: {
    borderColor: '#e2e2e2',
    borderTopWidth: 1.2,
    height: 1,
    marginTop: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
  },
  cardTopText: {fontSize: 18, fontWeight: 'bold'},
  cardBottomText: {fontSize: 14, color: 'grey', marginTop: 10},
  cardTextView: {width: '66%'},
  cardButtonView: {
    borderRadius: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: '#9b9b9b',
    borderWidth: 1,
    paddingVertical: 4,
    flexDirection: 'row',
  },
  cardButtonImage: {width: 15, height: 12, marginRight: 12},
  cardButtonText: {
    marginLeft: 14,
    marginRight: 10,
    color: 'grey',
    fontSize: 11,
  },
  rightView: {
    width: '34%',
    justifyContent: 'center',
  },
});

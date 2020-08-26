import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    padding: 16,
    marginTop: 1,
    backgroundColor: '#fff',
  },
  cardTopText: {fontSize: 16, fontWeight: 'bold', marginLeft: 10},
  cardTextView: {width: '76%', flexDirection: 'row', alignItems: 'center'},
  cardImage: {width: 28, height: 28},
  cardButtonView: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#339e7b',
    borderWidth: 1.4,
    paddingVertical: 6,
    flexDirection: 'row',
    borderRadius: 3,
  },

  cardButtonText: {
    color: '#339e7b',
    fontSize: 12,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  rightView: {
    width: '24%',
    justifyContent: 'center',
  },
});

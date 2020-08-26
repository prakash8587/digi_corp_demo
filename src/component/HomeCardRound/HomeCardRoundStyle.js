import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    backgroundColor: '#fff',
    marginTop: -30,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 8,
  },
  cardTopView: {
    flexDirection: 'row',
  },
  cardTopTextView: {flexDirection: 'row'},
  cardTopText: {fontSize: 18, fontWeight: 'bold'},
  cardTopTextAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#ff8c00',
  },
  cardBottomText: {fontSize: 14, color: 'grey', marginTop: 10},
  cardTextView: {width: '75%'},
  cardButtonView: {
    borderRadius: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: '#339e7b',
    borderWidth: 1,
    paddingVertical: 4,
    flexDirection: 'row',
  },
  cardButtonImage: {width: 15, height: 12, marginRight: 12},
  cardButtonText: {
    marginLeft: 14,
    marginRight: 10,
    color: '#339e7b',
    fontSize: 11,
  },
  rightView: {
    width: '25%',
    justifyContent: 'center',
  },
  cardFooterView: {
    marginTop: 10,
    backgroundColor: '#EBF4FA',
    paddingVertical: 6,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardFooterImage: {width: 10, height: 10},
  cardFooterText: {color: '#3FA6EB', fontSize: 11, marginLeft: 10},
});

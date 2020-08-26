import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {backgroundColor: '#e2e2e2'},
  scrollView: {height: '100%', width: '100%'},
  homeCardView: {backgroundColor: '#fff', marginTop: 10},
  extraHeaderView: {
    height: 80,
    backgroundColor: '#339e7b',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  extraHeaderText: {color: '#fff', fontSize: 12, marginTop: 6},
  seperatorView: {backgroundColor: '#d0d9d6', height: 12},
  horizontalList: {paddingHorizontal: 16},
  homeCardBottomView: {height: 10},
  homeCardBottomMainView: {height: 60},
  policyView: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  policyText: {marginRight: 10, fontSize: 16},
  policyLineView: {
    backgroundColor: '#e2e2e2',
    height: 1,
    width: '70%',
  },
  covidView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  covidImage: {width: 15, height: 15},
  covidText: {
    fontSize: 12,
    color: '#23C458',
    marginTop: 6,
    marginBottom: 6,
    padding: 5,
  },
  seperator: {width: 4, height: 8},
});

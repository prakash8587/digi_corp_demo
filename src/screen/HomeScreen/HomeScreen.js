import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  View,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import {styles} from './HomeScreenStyle';
import HomeHeader from '../../component/HomeHeader/HomeHeader';
import HomeCard from '../../component/HomeCard/HomeCard';
import HomeList from '../../component/HomeList/HomeList';
import HomeCardRound from '../../component/HomeCardRound/HomeCardRound';
import {policydata} from '../../utils/PolicyData';
import {loandata} from '../../utils/LoanData';
import BlogCard from '../../component/BlogCard/BlogCard';

class HomeScreen extends Component {
  renderSeperator = () => <View style={styles.seperator} />;

  renderItem = (item, backgroundColor) => (
    <HomeList backgroundColor={backgroundColor} item={item} />
  );

  getKeyExtractor = (item, index) => index.toString();

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar backgroundColor="#339e7b" />
        <HomeHeader />
        <ScrollView style={styles.scrollView}>
          <View style={styles.extraHeaderView}>
            <Text style={styles.extraHeaderText}>Good Morning, Prakash!</Text>
          </View>
          <HomeCardRound
            cardTopText={'Save tax up'}
            cardTopTextAmount={'₹78,000'}
            cardBottomText={'all tax-saving options. Instant proofs'}
            buttonText={'Save now'}
          />
          <View style={styles.homeCardView}>
            <HomeCard
              cardTopText={'National Pension System'}
              cardBottomText={'Retire rich & save tax'}
              buttonText={'Invest Now'}
            />
            <HomeCard
              cardTopText={'Fixed Deposit'}
              cardBottomText={'Assured returns with high safety'}
              buttonText={'Deposit Now'}
            />
            <View style={styles.seperatorView} />
            <HomeCard
              cardTopText={'Buy Insurance'}
              cardBottomText={'Best price. Expert help'}
              buttonText={'Recent Activities'}
            />
            <View style={styles.policyView}>
              <Text style={styles.policyText}>Buy new policy</Text>
              <View style={styles.policyLineView} />
            </View>
            <FlatList
              data={policydata}
              keyExtractor={this.getKeyExtractor}
              style={styles.horizontalList}
              renderItem={({item}) => this.renderItem(item)}
              horizontal
              ItemSeparatorComponent={this.renderSeperator}
            />
            <View style={styles.covidView}>
              <Image
                style={styles.covidImage}
                source={require('../../assets/info.png')}
              />
              <Text style={styles.covidText}>
                Assured COVID-19 coverage with all Health & Term plans
              </Text>
            </View>
            <View style={styles.seperatorView} />
            <HomeCard
              cardTopText={'Get a Loan'}
              cardBottomText={'Fast approval. Hassel-free process'}
              buttonText={'Track yours loans'}
            />
            <FlatList
              data={loandata}
              keyExtractor={this.getKeyExtractor}
              style={styles.horizontalList}
              renderItem={({item}) => this.renderItem(item, '#ffefd5')}
              horizontal
              ItemSeparatorComponent={this.renderSeperator}
            />
            <View style={styles.homeCardBottomView} />
          </View>
          <BlogCard />
          <View style={styles.homeCardBottomMainView} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;

import React, {Component} from 'react';
import {View, SafeAreaView, FlatList, ScrollView} from 'react-native';
import {styles} from './InsuranceScreenStyle';
import InsuranceHeader from '../../component/InsuranceHeader/InsuranceHeader';
import InsuranceCard from '../../component/InsuranceCard/InsuranceCard';
import InsuranceList from '../../component/InsuranceList/InsuranceList';
import {healthdata} from '../../utils/HealthData';
import {termdata} from '../../utils/TermData';
import AssitanceCard from '../../component/AssitanceCard/AssitanceCard';

class InsuranceScreen extends Component {
  renderFooter = () => <View style={styles.footer} />;

  renderSeperator = () => <View style={styles.seperator} />;

  renderItem = ({item}) => <InsuranceList item={item} />;

  getKeyExtractor = (item, index) => index.toString();

  render() {
    return (
      <SafeAreaView>
        <InsuranceHeader />
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <InsuranceCard
              cardTopText={'Health Insurance'}
              buttonText={'Get a quote'}
              cardImage={require('../../assets/health.png')}
            />
            <FlatList
              data={healthdata}
              keyExtractor={this.getKeyExtractor}
              style={styles.horizontalList}
              renderItem={this.renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={this.renderSeperator}
              ListFooterComponent={this.renderFooter}
            />
          </View>
          <View style={styles.insuranceOuter}>
            <InsuranceCard
              cardTopText={'Term Life Insurance'}
              buttonText={'Get a quote'}
              cardImage={require('../../assets/term_life.png')}
            />
            <FlatList
              data={termdata}
              keyExtractor={this.getKeyExtractor}
              style={styles.horizontalList}
              renderItem={this.renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={this.renderSeperator}
              ListFooterComponent={this.renderFooter}
            />
          </View>
          <InsuranceCard
            cardTopText={'Car Insurance'}
            buttonText={'Get a quote'}
            cardImage={require('../../assets/car.png')}
          />
          <InsuranceCard
            cardTopText={'Bike Insurance'}
            buttonText={'Get a quote'}
            cardImage={require('../../assets/bike.png')}
          />
          <AssitanceCard />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default InsuranceScreen;

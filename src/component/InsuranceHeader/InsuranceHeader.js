import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './InsuranceHeaderStyle';

const InsuranceHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Insurance</Text>
      <View style={styles.headerTextImage}>
        <Image
          style={styles.headerImage}
          source={require('../../assets/headphones.png')}
        />
        <Text style={styles.headerHelpText}>Help</Text>
      </View>
    </View>
  );
};

export default InsuranceHeader;

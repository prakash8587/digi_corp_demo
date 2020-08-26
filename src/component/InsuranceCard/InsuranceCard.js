import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './InsuranceCardStyle';

const InsuranceCard = (props) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardTextView}>
        <Image style={styles.cardImage} source={props.cardImage} />
        <Text style={styles.cardTopText}>{props.cardTopText}</Text>
      </View>
      <View style={styles.rightView}>
        <TouchableOpacity style={styles.cardButtonView}>
          <Text style={styles.cardButtonText}>{props.buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InsuranceCard;

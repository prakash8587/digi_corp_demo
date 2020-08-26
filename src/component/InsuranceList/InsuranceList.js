import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './InsuranceListStyle';

const InsuranceList = (props) => {
  const {item = {}} = props;
  return (
    <View
      style={[
        styles.listConatiner,
        item.color && {backgroundColor: item.color},
      ]}>
      <Text style={styles.listTopText}>{item.text}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonView}>
          <Text style={styles.buttonText}>Know More</Text>
        </TouchableOpacity>
        <Image style={styles.listImage} source={item.image} />
      </View>
    </View>
  );
};

export default InsuranceList;

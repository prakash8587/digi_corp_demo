import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './HomeCardStyle';

const HomeCard = (props) => {
  return (
    <>
      <View style={styles.line} />
      <View style={styles.cardContainer}>
        <View style={styles.cardTextView}>
          <Text style={styles.cardTopText}>{props.cardTopText}</Text>
          <Text style={styles.cardBottomText}>{props.cardBottomText}</Text>
        </View>
        <View style={styles.rightView}>
          <TouchableOpacity style={styles.cardButtonView}>
            <Text style={styles.cardButtonText}>{props.buttonText}</Text>
            <Image
              style={styles.cardButtonImage}
              source={require('../../assets/forward.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default HomeCard;

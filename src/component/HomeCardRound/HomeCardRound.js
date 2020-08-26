import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './HomeCardRoundStyle';

const HomeCardRound = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.cardContainer}>
      <View style={styles.cardTopView}>
        <View style={styles.cardTextView}>
          <View style={styles.cardTopTextView}>
            <Text style={styles.cardTopText}>{props.cardTopText}</Text>
            <Text style={styles.cardTopTextAmount}>
              {props.cardTopTextAmount}
            </Text>
          </View>
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
      <View style={styles.cardFooterView}>
        <Image
          style={styles.cardFooterImage}
          source={require('../../assets/idea.png')}
        />
        <Text style={styles.cardFooterText}>
          Maximize savings with ELSS, NPS and Insurance
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeCardRound;

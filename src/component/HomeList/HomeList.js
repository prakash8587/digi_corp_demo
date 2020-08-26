import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './HomeListStyle';

const HomeList = (props) => {
  const {item = {}} = props;
  return (
    <View
      style={[
        styles.listConatiner,
        props.backgroundColor && {backgroundColor: props.backgroundColor},
      ]}>
      <Image style={styles.listIcon} source={item.image} />
      <Text style={styles.listText}>{item.text}</Text>
    </View>
  );
};

export default HomeList;

import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './AssitanceCardStyle';

const ImageArr = [
  {
    img: require('../../assets/user1.png'),
  },
  {
    img: require('../../assets/user2.png'),
  },
  {
    img: require('../../assets/user3.png'),
  },
];

const AssitanceCard = (props) => {
  return (
    <View style={styles.assistanceContainer}>
      <Text style={styles.assistanceTopText}>Need Assistance?</Text>
      <Text style={styles.assistanceMiddleText}>
        Our experts are always available to help you.
      </Text>
      <View style={styles.userImageView}>
        {ImageArr.map((it, index) => (
          <Image
            key={index.toString()}
            style={[
              styles.userImage,
              {
                marginHorizontal: index === 1 ? -10 : 0,
                zIndex: index === 1 ? 1 : 0,
              },
            ]}
            source={it.img}
          />
        ))}
      </View>
      <View style={styles.talkChatView}>
        <Image
          style={styles.phoneImage}
          source={require('../../assets/phone.png')}
        />
        <Text style={styles.phoneText}>Talk to an expert</Text>
        <Image
          style={styles.chatImage}
          source={require('../../assets/chat.png')}
        />
        <Text style={styles.chatText}>Chat with an expert</Text>
      </View>
      <Text style={styles.routineText}>Monday - Saturday | 10am - 7pm</Text>
    </View>
  );
};

export default AssitanceCard;

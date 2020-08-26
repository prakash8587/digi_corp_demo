import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './HomeHeaderStyle';

const HomeHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        style={styles.logoImage}
        source={require('../../assets/logo.png')}
      />
      <View style={styles.imageView}>
        <View style={styles.referView}>
          <Image
            style={styles.referImage}
            source={require('../../assets/gift.png')}
          />
          <Text style={styles.referText}>{'Refer \n& Earn'}</Text>
          <View style={styles.referAmountView}>
            <Text style={styles.referAmountText}>₹ 1,00,000</Text>
          </View>
        </View>

        <Image
          style={styles.notificationImage}
          source={require('../../assets/bell.png')}
        />
        <Image
          style={styles.menuImage}
          source={require('../../assets/menu.png')}
        />
      </View>
    </View>
  );
};

export default HomeHeader;

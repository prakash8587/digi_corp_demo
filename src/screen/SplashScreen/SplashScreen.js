import React, { useEffect } from 'react';
import {View, Image} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import {styles} from './SplashScreenStyle'

const SplashScreen = (props) => {
  useEffect(() => {
    navigateToHomeScreen()
  })

  navigateToHomeScreen = () => {
    setTimeout(() => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Navigation' })],
        });
        props.navigation.dispatch(resetAction)
    }, 3000);
  };

    return (
      <View style={styles.container}>
        <>
        <Image
          source={require('../../assets/etmoney_logo.png')}
          style={styles.img}
        />
         <Image
          source={require('../../assets/times_logo.png')}
          style={styles.img}
        />
        </>
      </View>
    );
}

export default  React.memo(SplashScreen);
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from '../screen/SplashScreen/SplashScreen'
import Navigation from "./Navigation";

const AppNavigator = createStackNavigator(
  {
    SplashScreen: {screen: SplashScreen},
    Navigation: {screen: Navigation}
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);

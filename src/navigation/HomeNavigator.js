import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screen/HomeScreen/HomeScreen'
import SaveTaxScreen from '../screen/SaveTax/SaveTaxScreen'

const AppNavigator = createStackNavigator(
  {
    HomeScreen: {screen: HomeScreen},
    SaveTaxScreen: {screen: SaveTaxScreen}
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);

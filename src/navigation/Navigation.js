import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import Home from '../screen/HomeScreen/HomeScreen';
import Insurance from '../screen/InsuranceScreen/InsuranceScreen';
import {Image} from 'react-native';

const TabBarComponent = (props) => <BottomTabBar {...props} />;

const AppNavigator = createBottomTabNavigator(
  {
    Home: {screen: Home},
    Insurance: {screen: Insurance},
  },

  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName = require('../assets/home.png');
        if (routeName === 'Home') {
          iconName = focused
            ? require('../assets/home_selected.png')
            : require('../assets/home.png');
        } else if (routeName === 'Insurance') {
          iconName = focused
            ? require('../assets/insurance_selected.png')
            : require('../assets/insurance.png');
        }
        // You can return any component that you like here!
        return (
          <Image
            style={{height: 20, width: 20, marginTop: 6}}
            source={iconName}
          />
        );
      },
      tabBarOptions: {activeTintColor: '#339e7b'},
    }),
  },
);

export default createAppContainer(AppNavigator);

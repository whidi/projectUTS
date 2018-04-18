import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Screen1 from '../Screen/Screen1';
import Screen2 from '../Screen/Screen2';

export default StackHome = StackNavigator ({
  Screen1: {
    screen: Screen1,
    navigationOptions: () =>({
      title: 'Screen1',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#607D8B'
      }
    })
  },
  Screen2: {
    screen: Screen2,
    navigationOptions: () =>({
      title: 'Screen2',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#607D8B'
      }
    })
  }
},{
  initialRouteName: 'Screen1'
});

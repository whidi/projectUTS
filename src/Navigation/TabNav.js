import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Screen1 from '../Screen/Screen1';
import Screen2 from '../Screen/Screen2';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default TabNav = TabNavigator ({
  Screen1: {
    screen: Screen1,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => {
        return (
          <IconMaterialCommunityIcons 
            name= 'login-variant'
            size= {26}
            color={tintColor}
          />
        );
      }
    })
  },
  Screen2: {
    screen: Screen2,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => {
        return (
          <IconFontAwesome 
            name= 'list'
            size= {26}
            color={tintColor}
          />
        );
      }
    })
  },
},{
  tabBarOptions: {
    showIcon: true
  }
});
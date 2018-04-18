import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Screen1 from '../Screen/Screen1';
import Screen2 from '../Screen/Screen2';



export default Drawer = DrawerNavigator ({
  Screen1: {
    screen: Screen1
  },
  Screen2: {
    screen: Screen2
  }
});

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import StackHome from './src/Navigation/StackNav';
import TabNav from './src/Navigation/TabNav';
import MixNav from './src/Navigation/MixNav';
import StackTab from './src/Navigation/StackTab';



export default class App extends Component {
  render() {
    return (
      <StackTab />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

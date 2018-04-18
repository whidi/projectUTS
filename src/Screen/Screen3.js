import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';

export default class App extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.nama}>
          INFO DESA
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Screen1')}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'silver',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    width: 350,
    height: 44,
    padding: 8,
    backgroundColor: '#465B66',
    borderRadius: 10,
  },
  multilineInput: {
    width: 350,
    height: 100,
    padding: 8,
    backgroundColor: '#465B66',
    borderRadius: 10,
    color: 'white'
  },
  button: {
    backgroundColor: '#607D8B',
    marginTop : 50,
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
  },
  nama:{
    fontWeight: '500',
    fontSize: 38,
    marginBottom: 20,
  }
});

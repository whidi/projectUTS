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
    header: null,
    headerStyle:{
          backgroundColor: '#232E33',
          elevation: 0,
          showdownOpacity: 0.1
    },
  };
  constructor()
    {
        super();
        this.state = {
          nama: '',
          umur: 0,
          alamat: '',
          laporan: '',
          ActivityIndicator_Loading: false,
        }
    }

    submitData = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('https://gusnando.com/mobile/whidiharta/api/lapor.php',
            {
                method: 'POST',
                headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  nama : this.state.nama,
                  umur : this.state.umur,
                  alamat : this.state.alamat,
                  laporan : this.state.laporan
                })

            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                Alert.alert('SUCESS',responseJsonFromServer);
                this.setState(
                {
                  nama: '',
                  umur: '',
                  alamat: '',
                  laporan: '',
                  ActivityIndicator_Loading : false
                });

            }).catch((error) =>
            {
                console.error(error);

                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.nama}>
          LAPORAN ANDA
        </Text>
        <Text style={styles.welcome}>
          Nama:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan Nama"
          underlineColorAndroid='#FFF'
          onChangeText={(nama) => this.setState({ nama })}
        />
        <Text style={styles.welcome}>
          Umur:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan Umur"
          underlineColorAndroid='#FFF'
          onChangeText={(umur) => this.setState({ umur })}
        />
        <Text style={styles.welcome}>
          Alamat:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan Alamat"
          underlineColorAndroid='#FFF'
          onChangeText={(alamat)=> this.setState({ alamat })}
        />
        <Text style={styles.welcome}>
          Laporan:
        </Text>
        <TextInput
          style={styles.multilineInput}
          underlineColorAndroid='#FFF'
          multiline = {true}
          numberOfLines = {4}
          selectionColor ='#FFFFFF'
          onChangeText={(laporan)=> this.setState({ laporan })}
        />
          {
          this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#2196F3' size='large' /> : null
          }
        <TouchableOpacity style={styles.button} onPress={this.submitData}>
          <Text style={styles.buttonText}>SUBMIT LAPORAN</Text>
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
    fontSize: 48,
    marginBottom: 20,
  }
});

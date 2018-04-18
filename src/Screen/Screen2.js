import React from 'react';
import { StyleSheet, Text,TouchableHighlight, RefreshControl, View, Button, TextInput,FlatList, List, ListItem, ActivityIndicator, Image } from 'react-native';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const user = require('../gambar/user.png');

export default class ListData extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
    };
}

  componentDidMount()  {
      const url = 'http://gusnando.com/mobile/whidiharta/api/listlapor.php';
       this.setState({ loading: true });
      fetch (url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("comp");
        console.log(responseJson);
        this.setState({
          data: responseJson,
          error: responseJson.error || null,
          loading: false,
          refreshing: false
        });
      }
    );
  }
  _onRefresh() {
    const url = 'http://gusnando.com/mobile/whidiharta/api/listlapor.php';
    this.setState({refreshing: true});
    fetch(url)
    .then((response) => response.json())
      .then((responseJson) => {
        console.log("comp");
        console.log(responseJson);
        this.setState({
          data: responseJson,
          error: responseJson.error || null,
          loading: false,
          refreshing: false
        });
      }
    );
  }
  render() {
    if (this.state.loading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator color='#000000' size='large'/>
        </View>
      );
    }

    return (

      <View style={{marginTop: 30, justifyContent:'center', alignItems: 'center',  marginBottom: 10}}>
        <View style={styles.Header}>
            <Text style={styles.TextHeader}>Data Laporan Masyarakat</Text>
        </View>
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
               onRefresh={this._onRefresh.bind(this)}
              />
            }
            data={this.state.data}
            renderItem={({item}) =>
              <View style={styles.BoxClass}>
                <View>
                  <Image source={user} style={{ marginTop: 15, height: 50, width: 50 }}/>
                </View>
                <Text style={styles.ListFirst}>Nama: {item.nama}</Text>
                <Text>Umur: {item.umur}</Text>
                <Text>Alamat: {item.alamat}</Text>
                <Text>Laporan: {item.laporan}</Text>
                <Text>Tanggal lapor: {item.tanggal}</Text>
              </View>
            }
          />

      </View>
    );
  }
}


const styles = StyleSheet.create({
    Header: {
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextHeader: {
        fontSize: 30
    },
    ListItem: {
        backgroundColor:'#BBDEFB',
        marginTop: 5,
        flex: 1
    },
    ListFirst: {
      fontSize: 20
    },
    BoxClass: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 200,
      backgroundColor: '#FFF',
      borderWidth: 1,
      borderColor: '#2196F3',
      borderRadius: 7,
      marginBottom: 10,
      width: 500,
      paddingTop: 5,
      paddingBottom: 5,
    }

  });

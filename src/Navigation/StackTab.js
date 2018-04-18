import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import Screen1 from '../Screen/Screen1';
import Screen2 from '../Screen/Screen2';
import Screen3 from '../Screen/Screen3';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const StackHome = StackNavigator ({
  Screen3: {
    screen: Screen3,
    navigationOptions: () =>({
      headerStyle: {
        backgroundColor: 'silver',
      }
    })
  },
},{
  initialRouteName: 'Screen3'
});
const TabNav = TabNavigator ({
  Screen1: {
    screen: Screen1,
    navigationOptions: () => ({
      title:'Tulis laporan',
      headerTintColor: 'white',
      headerStyle:{
          backgroundColor: '#232E33',
          elevation: 0,
          showdownOpacity: 0.1
      },
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
      title:'Lihat Laporan',
      headerTintColor: 'white',
        headerStyle:{
          backgroundColor: '#232E33',
          elevation: 0,
          showdownOpacity: 0.1
      },
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
export default AppRouter = StackNavigator({
    StackHome: { screen: StackHome},
    TabNav: { screen: TabNav}
})
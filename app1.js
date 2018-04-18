import React, { Component } from 'react';

import { StyleSheet, View, TextInput, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
 
export default class App extends Component<{}>
{
    constructor()
    {
        super();
 
        this.state = { 

          Product_Name: '', 

          Product_Number: '', 

          Product_Details: '',

          ActivityIndicator_Loading: false, 

        }
    }
 
    Insert_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('https://reactnativecode.000webhostapp.com/Insert_Product.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  product_name : this.state.Product_Name,

                  product_number : this.state.Product_Number,

                  product_details : this.state.Product_Details

                })
 
            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);

                this.setState({ ActivityIndicator_Loading : false });

            }).catch((error) =>
            {
                console.error(error);

                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }
 
    render()
    {
        return(

            <View style = { styles.MainContainer }>
            
                <TextInput 
                  placeholder = "Enter Product Name"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ Product_Name: TextInputText })} />

                <TextInput 
                  placeholder = "Enter Product Number"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ Product_Number: TextInputText })} />
 
                <TextInput  
                  placeholder = "Enter Product Details" 
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ Product_Details: TextInputText })} />
 
                <TouchableOpacity 
                  activeOpacity = { 0.5 } 
                  style = { styles.TouchableOpacityStyle } 
                  onPress = { this.Insert_Data_Into_MySQL }>

                    <Text style = { styles.TextStyle }>Insert Data Into MySQL Database</Text>

                </TouchableOpacity>

                {
        
                this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#009688' size='large'style={styles.ActivityIndicatorStyle} /> : null
                
                }
                
            </View>
        );
    }
}
 
const styles = StyleSheet.create(
{
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20

    },
 
    TextInputStyleClass:
    {

      textAlign: 'center',
      height: 40,
      backgroundColor : "#fff",
      borderWidth: 1,
      borderColor: '#009688',
      borderRadius: 7 ,
      marginBottom: 10,
      width: '95%'
    },
 
    TouchableOpacityStyle:
   {
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#009688',
      marginBottom: 20,
      width: '90%'
 
    },
 
    TextStyle:
    {
       color: '#fff',
        textAlign: 'center',
        fontSize: 18
    },

    ActivityIndicatorStyle:{
      
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    
  }
});
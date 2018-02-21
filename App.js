/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Image,
  Button ,TouchableHighlight,TextInput
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        
        
        <View style = { [styles.box ,styles.red]  }   >

          <Image
          style={{width: 200, height: 200}}
          source={{uri: 'https://cdn-images-1.medium.com/max/500/1*2p9Mg7T9SME9hMokF7omOw.png'}} />
        
        </View>
        
        <View style = { [styles.box ,styles.blue]  } >

          <View style = {{ flexDirection: 'column' ,flex:1 }} >
          
            <TextInput
              style={styles.inputText} 
              placeholder = {"Usuario"} 
              underlineColorAndroid = {'rgba(255,255,255,0.0)'} />


            <TextInput
              style={styles.inputText} 
              placeholder = {"Contraseña"} 
              underlineColorAndroid = {'rgba(255,255,255,0.0)'} />
        

          </View>
          
        </View>
        <View style = { [styles.box ,styles.green] }>
        
        <TouchableHighlight 
          style = { [styles.buttonS ] }   
          onPress={this.press} underlayColor = {'rgba(255,255,255,0.2)'} >
            <Text style ={ {color:'#FFFFFF'} } > Iniciar Sesión </Text>
        </TouchableHighlight>

          <TouchableHighlight 
          style = { [styles.buttonS ] }   
          onPress={this.press} underlayColor = {'rgba(255,255,255,0.2)'} >
            <Text style ={ {color:'#FFFFFF'} } > Registrate </Text>
        </TouchableHighlight>


        </View>

      </View>
    );
  }

  press(){

  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#009688',
   // padding: 16,
  },
  box :{
    //width:100,
    //height:100,
    //backgroundColor : 'red',
    
  },
  red:{
    //backgroundColor : 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex:.4
  },
  blue:{
   // backgroundColor : 'blue',
    flex:.4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  green:{
    //backgroundColor : 'green',
    flex:.2
  },
  buttonS:{
    padding:10,
    marginTop: 2,
    marginLeft:16,
    marginRight: 16,
    marginBottom: 2,
    alignItems: 'center',
    borderRadius: 2,
    borderWidth: 2,
    borderColor: "#fff",
  },
  inputText:{
    
    flexDirection: 'row',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderColor:'#ccc',
    backgroundColor:'#fff',
    borderRadius: 4,
    marginLeft:16,
    marginRight: 16,
  }

  
});

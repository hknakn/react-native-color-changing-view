import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
     <View style = {styles.mainContainer}>
        <View style = {styles.insideContainer1}>
          <Text style = {styles.mainText}>Hakan Akın</Text>
        </View>
        <View style = {styles.insideContainer2}>
          <Text style = {styles.mainText2}>Deneme Text</Text>
        </View>
        <View style = {styles.insideContainer3}>
          <Text style = {styles.mainText}>Deneme Text</Text>
        </View>
        <View style = {styles.insideContainer4}>
          <Text style = {styles.mainText2}>Deneme Text</Text>
        </View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
mainContainer: {
  flex: 1,
  backgroundColor: '#AED6F1',
},
insideContainer1:{
  flex:0.4,
  backgroundColor:'white',
  alignItems:'center',
  justifyContent:'center',
},
insideContainer2:{
  flex:0.4,
  backgroundColor:'#AED6F1',
  alignItems:'center',
  justifyContent:'center',
},
insideContainer3:{
  flex:0.2,
  backgroundColor:'white',
  alignItems:'center',
  justifyContent:'center',
},
insideContainer4:{
  flex:0.2,
  backgroundColor:'#AED6F1',
  alignItems:'center',
  justifyContent:'center',
},
mainText: {
  fontFamily: 'Avenir',
  color: '#AED6F1',
  fontSize: 25,
},
mainText2: {
  fontFamily: 'Avenir',
  color: 'white',
  fontSize: 25,
},
});

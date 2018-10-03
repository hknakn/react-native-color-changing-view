import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

import NavigationBar from './components/navigationBar';
import { black } from 'ansi-colors';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      bottomView: '#AED6F1',
      bottomView2: 'white'
    }

    this.onTap = this.onTap.bind(this)
  }

  onTap() {
    if (this.state.bottomView == '#AED6F1' && this.state.bottomView2 == 'white') {
      this.setState({ bottomView: 'white' }),
      this.setState({ bottomView2: '#AED6F1' })
    } else if(this.state.bottomView == 'white' && this.state.bottomView2 == '#AED6F1') {
      this.setState({bottomView: '#AED6F1' })
      this.setState({bottomView2: 'white' })
    }
  }

  render() {
    return (
     <View style = {{flex: 1}}>
        <View style = {{height: 21, backgroundColor: '#D5F5E3' }}> </View>
        
        <NavigationBar />
        
        <TouchableOpacity onPress={this.onTap } style = {{alignItems: 'center', justifyContent: 'center',flex: 0.5, backgroundColor: this.state.bottomView2, borderBottomColor: '#ABB2B9',borderBottomWidth: 2.5}}>
          <Text style = {{fontFamily: 'Avenir', fontSize: 27, color: this.state.bottomView, textAlign: 'center'}}>Click here to reverse the colors!!</Text>
        </TouchableOpacity>
        
        <View style = {{alignItems: 'center', justifyContent: 'center',flex: 0.3, backgroundColor: this.state.bottomView, borderBottomColor: '#ABB2B9',borderBottomWidth: 2.5}}>
          <Text style = {{fontFamily: 'Avenir', fontSize: 27, color: this.state.bottomView2}}>Hakan</Text>
        </View>
        
        <View style = {{alignItems: 'center', justifyContent: 'center',flex: 0.3, backgroundColor: this.state.bottomView2, borderBottomColor: '#ABB2B9',borderBottomWidth: 2.5}}>
          <Text style = {{fontFamily: 'Avenir', fontSize: 27, color: this.state.bottomView}}>Akın</Text>
        </View>
        
        <View style = {{alignItems: 'center', justifyContent: 'center',flex: 0.3, backgroundColor: this.state.bottomView, borderBottomColor: '#ABB2B9',borderBottomWidth: 2.5}}>
          <Text style = {{fontFamily: 'Avenir', fontSize: 27, color: this.state.bottomView2}}>React Native</Text>
        </View>

     </View>
    );
  }
}
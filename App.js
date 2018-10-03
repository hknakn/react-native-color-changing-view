import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

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
     <View style = {styles.mainContainer}>
        <View style = {{height: 21, backgroundColor: this.state.bottomView }}>
        </View>
        <TouchableOpacity onPress={this.onTap } style = {{alignItems: 'center', justifyContent: 'center',flex: 0.5, backgroundColor: this.state.bottomView2}}>
          <Text style = {{fontFamily: 'Avenir', fontSize: 25, color: this.state.bottomView}}>Click to reverse the colors!!</Text>
        </TouchableOpacity>
        <View style = {{alignItems: 'center', justifyContent: 'center',flex: 0.3, backgroundColor: this.state.bottomView}}>
          <Text style = {{fontFamily: 'Avenir', fontSize: 25, color: this.state.bottomView2}}>Sample Text</Text>
        </View>
        <View style = {{alignItems: 'center', justifyContent: 'center',flex: 0.3, backgroundColor: this.state.bottomView2}}>
          <Text style = {{fontFamily: 'Avenir', fontSize: 25, color: this.state.bottomView}}>Sample Text</Text>
        </View>
        <View style = {{alignItems: 'center', justifyContent: 'center',flex: 0.3, backgroundColor: this.state.bottomView}}>
          <Text style = {{fontFamily: 'Avenir', fontSize: 25, color: this.state.bottomView2}}>Sample Text</Text>
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
  backgroundColor: '#AED6F1',
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
import React from 'react';
import { View, Text} from 'react-native';

export default class NavigationBar extends React.Component {
    render() {

        return(
            <View style = {{ backgroundColor: '#D5F5E3', alignItems: 'center', padding: 18,borderBottomWidth: 2.2, borderBottomColor: '#7DCEA0'}}>
            <Text style = {{fontFamily: 'Avenir', fontSize: 22, fontWeight: 'bold', color: '#7DCEA0'}}>Anasayfa</Text>
            </View>
        )
    }
}   
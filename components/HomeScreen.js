import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

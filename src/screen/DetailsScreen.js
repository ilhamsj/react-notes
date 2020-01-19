import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class DetailsScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>DetailsScreen</Text>
        <Button
          title="Details Push"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Home Navigate"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

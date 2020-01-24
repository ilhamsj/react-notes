import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Notes extends Component {
  render() {
    return (
      <View style={{display: 'flex'}}>
        <Text>{this.props.val}</Text>
        <Button
          title={this.props.val}
          onPress={() => this.props.method(this.props.val)}
        />
      </View>
    );
  }
}

export default Notes;

import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [
        {
          id: 0,
          name: 'janet',
        },
        {
          id: 1,
          name: 'ricky',
        },
        {
          id: 2,
          name: 'ujang',
        },
      ],
    };
  }

  newMethod(index, item) {
    return (
      <View key={index}>
        <Text>{item.name}</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.state.members.map((item, index) => {
          return this.newMethod(index, item);
        })}
      </View>
    );
  }
}

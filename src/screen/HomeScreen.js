import React, {Component} from 'react';
import {Text, View, Button, ToastAndroid, StatusBar} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

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

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Terbaik',
      notes: ['Javascript', 'Python', 'Golang', 'Kotlin'],
      teriak(data) {
        ToastAndroid.show(data, ToastAndroid.BOTTOM);
      },
    };
  }

  render() {
    const note = this.state.notes.map((val, key) => {
      return (
        <Notes key={key} val={val} keyVal={key} method={this.state.teriak} />
      );
    });

    return (
      <View style={{padding: 20}}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Text>Bahasa Pemrograman {this.state.text}</Text>
        {note}
        <Button
          title="Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <TextInput
          onChangeText={text => this.setState({text})}
          style={{borderWidth: 1}}
        />
      </View>
    );
  }
}

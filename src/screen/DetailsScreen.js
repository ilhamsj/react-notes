import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, ActivityIndicator} from 'react-native';
import {
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native-gesture-handler';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    return fetch(
      `https://jsonplaceholder.typicode.com/posts/${this.props.navigation.state.params.id}`,
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function() {},
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={[styles.container]}>
        <Text style={[styles.title, styles.mb2]}>
          {this.state.dataSource.title}
        </Text>
        <ScrollView>
          <Text>{this.state.dataSource.body}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
  },
  textPrimary: {
    color: 'red',
  },
  textLight: {
    color: 'white',
  },
  formControl: {
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 10,
  },
  btnPrimary: {
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  mb2: {
    marginBottom: 20,
  },
  mb1: {
    marginBottom: 10,
  },
  p2: {
    padding: 20,
  },
  p1: {
    padding: 10,
  },
});

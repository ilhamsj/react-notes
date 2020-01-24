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
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.slice(0, 15),
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
        <Text style={[styles.title, styles.mb2]}>Daftar Catatan</Text>
        <ScrollView>
          {this.state.dataSource.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={4}
              style={[styles.btnPrimary, styles.p2, styles.mb1]}>
              <Text
                onPress={() =>
                  this.props.navigation.navigate('Details', {
                    id: item.id,
                  })
                }
                style={styles.textLight}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
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

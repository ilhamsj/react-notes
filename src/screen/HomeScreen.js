import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      userId: 1,
    };
  }

  insert = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: this.state.title,
        body: this.state.body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => alert('Data berhasil disimpan'));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.title, styles.mb2]}>Tambah Catatan</Text>
        <TextInput
          style={[styles.formControl, styles.mb2, styles.p1]}
          placeholder="Title"
          value={this.state.title}
          onChangeText={TextInputValue =>
            this.setState({title: TextInputValue})
          }
        />
        <TextInput
          style={[styles.formControl, styles.mb2, styles.p1]}
          placeholder="Body"
          value={this.state.body}
          onChangeText={TextInputValue => this.setState({body: TextInputValue})}
        />
        <TouchableOpacity
          activeOpacity={4}
          style={[styles.btnPrimary, styles.p2, styles.mb1]}
          onPress={() => {
            alert('You tapped the button!');
          }}>
          <Text onPress={this.insert} style={[styles.textLight]}>
            Simpan
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={4}
          style={[styles.btnPrimary, styles.p2]}>
          <Text
            onPress={() => this.props.navigation.navigate('Posts')}
            style={styles.textLight}>
            Tampilkan Segalanya
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    flexDirection: 'column',
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

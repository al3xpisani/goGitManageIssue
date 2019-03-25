/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';

import axios from '~/services/api';
import styles from '~/pages/Welcome/styles';

export default class Welcome extends Component {
  state = {
    gitUser: '',
    error: '',
    loading: false,
  };

  handlechangeInput = (text) => {
    this.setState({ gitUser: text });
  };

  checkUserExists = (user) => {
    const response = axios.get(`/users/${user}`);
    return response;
  };

  saveUserAsyncRepo = async (user) => {
    const response = await AsyncStorage.setItem('@git:user', user);
  };

  signin = async () => {
    const { gitUser } = this.state;
    const { navigation } = this.props;

    this.setState({ loading: true });

    try {
      await this.checkUserExists(gitUser);
      await this.saveUserAsyncRepo(gitUser);

      // deu tudo certo
      navigation.navigate('Repository');
    } catch (error) {
      console.tron.log('Usuario inexistente');
      this.setState({ error, loading: false });
    }
  };

  render() {
    const { gitUser, error, loading } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Bem-Vindo</Text>
        <Text style={styles.text}>Para continuar entre com o usuario do git</Text>

        {error ? (
          <View style={styles.viewUserInexistente}>
            <Text style={styles.userInexistente}>Usuario inexistente</Text>
          </View>
        ) : null}

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="usuario do git"
            underlineColorAndroid="transparent"
            value={gitUser}
            onChangeText={text => this.handlechangeInput(text)}
          />
          <TouchableOpacity style={styles.button} onPress={this.signin}>
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>Proseguir</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

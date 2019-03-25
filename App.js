import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

import CreateNavigatorRule from '~/Routes';

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false,
  };

  async componentDidMount() {
    const user = await AsyncStorage.getItem('@git:user');
    this.setState({
      userChecked: true,
      userLogged: !!user,
    });
  }

  render() {
    const { userChecked, userLogged } = this.state;

    if (!userChecked) return null;
    console.tron.log(userLogged);
    const Routes = CreateNavigatorRule(userLogged);
    return <Routes />;
  }
}

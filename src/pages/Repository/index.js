/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import api from '~/services/api';

import MountHeader from '~/components/Header';
import RepoIssuesItem from './RepoIssuesItem';

export default class Repository extends Component {
  state = {
    repoName: '',
    data: [],
    loading: false,
  };

  addStorage = async (data) => {
    const { id, name, organization,full_name } = data.data;

    const response = await AsyncStorage.setItem(
      '@git:repo',
      JSON.stringify({ id, name, organization,full_name }),
    );
    this.setState({ data: [...this.state.data, { id, name, organization,full_name }] });

    this.setState({ loading: false });
    // console.tron.log(JSON.parse(await AsyncStorage.getItem('@git:user')));
    // console.tron.log(this.state.repo.organization);
    console.tron.log(this.state);
  };

  isRepoExists = (repoName) => {
    const { data } = this.state;
    // console.tron.log(data.findIndex(repo => repo.full_name === repoName));
    return data.findIndex(repo => repo.full_name === repoName);
  };

  addRepo = async () => {
    const { repoName } = this.state;
    this.setState({ loading: true });

    try {
      if (this.isRepoExists(repoName) !== -1) {
        ToastAndroid.showWithGravityAndOffset(
          'Repo already exists',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
        this.setState({ loading: false });
        return false;
      }

      const response = await api.get(`/repos/${repoName}`);
      this.addStorage(response);

      ToastAndroid.showWithGravityAndOffset(
        'Repo added with success',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    } catch (error) {
      ToastAndroid.showWithGravityAndOffset(
        "Repo does not exists",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      this.setState({ loading: false });
    }
    this.setState({ repoName: '' });
  };

  listItem = ({ item }) => <RepoIssuesItem repository={item} />;

  renderList = () => {
    const { data } = this.state;
    return (
      <FlatList data={data} keyExtractor={item => String(item.id)} renderItem={this.listItem} />
    );
  };

  render() {
    const { repoName, loading } = this.state;
    return (
      <View style={styles.container}>
        <MountHeader title="GitRepos" />
        <View style={styles.addRepoContainer}>
          <TextInput
            onChangeText={(e) => {
              this.setState({ repoName: e });
            }}
            value={repoName}
            style={styles.inputText}
            placeholder="Add new repository"
          />
          <TouchableOpacity onPress={this.addRepo}>
            <Icons name="plus" size={18} />
          </TouchableOpacity>
        </View>
        <View>{loading ? <ActivityIndicator /> : this.renderList()}</View>
      </View>
    );
  }
}

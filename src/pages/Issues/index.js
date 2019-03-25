import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MountHeader from '~/components/Header';

import Filter from '~/pages/Repository/RepoIssuesItem/Component/Filter';

export default class Issues extends Component {
  state = {};

  filterIssues = (filter) => {
    const { navigation } = this.props;
    console.tron.log(navigation.getParam('id'));
  };

  render() {
    return (
      <View>
        <MountHeader title="Issues" hasBackActivity="Repository" />
        <Filter filterIssues={this.filterIssues} />
        <Text>Issues</Text>
      </View>
    );
  }
}

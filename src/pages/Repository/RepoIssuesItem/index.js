import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

import styles from './styles';

class RepoIssueItems extends Component {
  openIssue = (id) => {
    const { navigation } = this.props;
    navigation.navigate('Issues', { id });
    // console.tron.log(id);
  };

  render() {
    const { repository } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: repository.organization.avatar_url }} />
        <View style={styles.viewTitle}>
          <Text style={styles.title}>{repository.name}</Text>
          <Text style={styles.subTitle}>{repository.organization.login}</Text>
        </View>

        <View style={styles.viewIcon}>
          <TouchableOpacity onPress={() => this.openIssue(repository.id)}>
            <Icons style={styles.icon} size={24} name="angle-right" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default withNavigation(RepoIssueItems);

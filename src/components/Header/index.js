import React, { Component } from 'react';
import {
  View, Text, StatusBar, TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Icons from 'react-native-vector-icons/FontAwesome';

import styles from './style';

class Header extends Component {
  backActivity = (hasBackActivity) => {
    const { navigation } = this.props;
    navigation.navigate(hasBackActivity);
  };

  render() {
    const { title, hasBackActivity = null } = this.props;
    return (
      <View style={hasBackActivity ? styles.container : styles.containerCenter}>
        <StatusBar barStyle="dark-content" />

        {!!hasBackActivity && (
          <TouchableOpacity onPress={() => this.backActivity(hasBackActivity)}>
            <Icons name="angle-left" size={32} />
          </TouchableOpacity>
        )}

        <Text style={styles.title}>{title}</Text>
        <View style={styles.right} />
      </View>
    );
  }
}

export default withNavigation(Header);

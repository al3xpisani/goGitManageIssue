import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './style';

const Filter = ({ filterIssues }) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() => {
        filterIssues('all');
      }}
      Text="All issues"
    >
      <Text style={styles.filterTitle}>All issues</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        filterIssues('opened');
      }}
      Text="Opened"
    >
      <Text style={styles.filterTitle}>Opened</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        filterIssues('closed');
      }}
      Text="Closed"
    >
      <Text style={styles.filterTitle}>Closed</Text>
    </TouchableOpacity>
  </View>
);

export default Filter;

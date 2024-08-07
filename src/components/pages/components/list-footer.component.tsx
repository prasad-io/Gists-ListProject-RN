import {ActivityIndicator, StyleSheet, Text} from 'react-native';
import React from 'react';

const ListFooterComponent = (isLoading: boolean, hasMore: boolean) => {
  if (isLoading) {
    return <ActivityIndicator style={styles.activityIndicator} />;
  }
  if (!hasMore) {
    return <Text style={styles.endOfIndicator}>No more gists</Text>;
  }
  return null;
};

export default ListFooterComponent;

const styles = StyleSheet.create({
  activityIndicator: {marginVertical: 10},
  endOfIndicator : {textAlign: 'center', padding: 10},
});

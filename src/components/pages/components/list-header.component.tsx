import {StyleSheet, Text} from 'react-native';
import React from 'react';

const ListHeaderComponent = () => {
  return <Text style={styles.listHeader}>Gists</Text>;
};

export default ListHeaderComponent;

const styles = StyleSheet.create({
  listHeader: {textAlign: 'left', backgroundColor: '#ccc', padding: 10},
});

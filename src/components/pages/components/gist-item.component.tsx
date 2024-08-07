import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './gist-item.component.style.ts';

interface GistItemProps {
  avatarUrl: string;
  filename: string;
}

const GistItemComponent: React.FC<GistItemProps> = item => {
  return (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.avatarUrl}} style={styles.avatar} />
      <Text style={styles.fileName}>{item.filename}</Text>
    </View>
  );
};

export default GistItemComponent;

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageOrientation from '../components/ImageOrientation';

const GalleryScreen = props => {
  return (
    <View style={styles.screen}>
      <ImageOrientation {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GalleryScreen;

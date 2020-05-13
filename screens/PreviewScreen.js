import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckoutButton from '../components/CheckoutButton';
import Preview from '../components/Preview';

const PreviewScreen = props => {
  return (
    <View style={styles.screen}>
      <Preview {...props} />
      <CheckoutButton {...props} />
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

export default PreviewScreen;

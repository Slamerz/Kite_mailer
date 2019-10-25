import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AnotherScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Another Screen</Text>
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

export default AnotherScreen;

import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import Colors from '../constants/Colors';

const SentMailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Sent Mail</Text>
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

export default SentMailScreen;

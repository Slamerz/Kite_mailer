import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NewMailButton from '../components/NewMailButton';

import Colors from '../constants/Colors';

const SentMailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Sent Mail</Text>
      <NewMailButton {...props} />
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

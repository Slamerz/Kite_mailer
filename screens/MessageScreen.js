import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MessageScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Compose message</Text>
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

export default MessageScreen;

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MailTemplateScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Mail Template</Text>
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

export default MailTemplateScreen;

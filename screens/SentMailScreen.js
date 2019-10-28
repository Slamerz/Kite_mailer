import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors from '../constants/Colors';

const SentMailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Sent Mail</Text>
      <Button
        title="New Message"
        onPress={() => {
          props.navigation.navigate({routeName: 'CreateMail'});
        }}
      />
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

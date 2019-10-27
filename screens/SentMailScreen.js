import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import Colors from '../constants/Colors';

const SentMailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Sent Mail</Text>
      <Button
        title="Settings"
        onPress={() => {
          props.navigation.navigate({routeName: 'SettingsScreen'});
        }}
      />
      <Button
        title="Logout"
        onPress={() => {
          props.navigation.navigate({routeName: 'LoginScreen'});
        }}
      />
      <Button
        title="Drafts"
        onPress={() => {
          props.navigation.navigate({routeName: 'DraftScreen'});
        }}
      />
    </View>
  );
};

SentMailScreen.navigationOptions = {
  headerTitle: 'KITe Sent Mail',
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: Colors.secondary,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SentMailScreen;

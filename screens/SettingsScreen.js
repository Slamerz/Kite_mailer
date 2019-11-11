import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import Colors from '../constants/Colors';

const SettingsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Settings</Text>
      <Button
        title="Logout"
        onPress={() => {
          props.navigation.navigate({routeName: 'SignIn'});
        }}
      />
    </View>
  );
};

SettingsScreen.navigationOptions = {
  headerTitle: 'KITe Settings',
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

export default SettingsScreen;

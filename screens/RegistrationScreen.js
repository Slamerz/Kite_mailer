import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import Colors from '../constants/Colors';

const RegistrationScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Sign Up</Text>
      <Button
        title="Go to Login"
        onPress={() => {
          props.navigation.navigate({routeName: 'LoginScreen'});
        }}
      />
      <Button
        title="Submit"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

RegistrationScreen.navigationOptions = {
  headerTitle: 'KITe Sign Up',
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

export default RegistrationScreen;

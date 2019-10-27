import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import Colors from '../constants/Colors';

const LoginScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Login</Text>
      <Button
        title="Go to Sign Up"
        onPress={() => {
          props.navigation.navigate({routeName: 'RegistrationScreen'});
        }}
      />
      <Button
        title="Submit"
        onPress={() => {
          props.navigation.navigate({routeName: 'SentMailScreen'});
        }}
      />
    </View>
  );
};

LoginScreen.navigationOptions = {
  headerTitle: 'KITe Login',
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

export default LoginScreen;

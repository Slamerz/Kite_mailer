import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import Colors from '../constants/Colors';

import LoginForm from '../components/LoginForm';

const LoginScreen = props => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <LoginForm {...props} />
        <Text>Login</Text>
      </View>
    </TouchableWithoutFeedback>
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

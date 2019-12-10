import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {Button} from 'native-base';

import Colors from '../constants/Colors';

import LoginForm from '../components/LoginForm';
import {from} from 'apollo-link';

const LoginScreen = props => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <LoginForm {...props} />
        <View style={styles.text}>
          <Text
            style={{
              fontSize: 20,
              color: 'grey',
              paddingTop: 10,
              paddingRight: 10,
            }}>
            Don't have an account?
          </Text>
          <Button
            transparent
            onPress={() => {
              props.navigation.navigate({routeName: 'Register'});
            }}>
            <Text style={{fontSize: 20, color: 'orange'}}>Sign Up</Text>
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

LoginScreen.navigationOptions = {
  headerTitle: 'KITe Login',
  // headerTitleStyle: {fontWeight: 'bold'},
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
  text: {
    flexDirection: 'row',
    width: '90%',
    paddingTop: 40,
  },
});

export default LoginScreen;

import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import Colors from '../constants/Colors';

import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';

const LoginRegisterTabNavigator = createMaterialTopTabNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="md-log-in" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
    Register: {
      screen: RegistrationScreen,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="md-clipboard" size={25} color={tabInfo.tintColor} />
          );
        },
        tabBarLabel: 'Sign Up',
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.primary,
      inactiveTintColor: 'gray',
      indicatorStyle: {backgroundColor: Colors.primary},
      showIcon: true,
      style: {
        backgroundColor: 'white',
      },
    },
  },
);

LoginRegisterTabNavigator.navigationOptions = ({navigation}) => ({
  headerTitle: 'KITe',
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: Colors.secondary,
});

export default LoginRegisterTabNavigator;

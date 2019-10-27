import React from 'react-native';
// import {Ionicons} from '@expo/vector-icons';
import {createStackNavigator} from 'react-navigation-stack';
import {
  createTabsNavigator,
  createMaterialTopTabNavigator,
  createBottomTabNavigator,
  createTabNavigator,
} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import Colors from '../constants/Colors';
import {Icon} from 'react-native';

import DraftScreen from '../screens/DraftScreen';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import SentMailScreen from '../screens/SentMailScreen';
import SettingsScreen from '../screens/SettingsScreen';

const SentDraftsTabNavigator = createMaterialTopTabNavigator(
  {
    Sent: {
      screen: SentMailScreen,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return <Icon name="ios-send" size={25} color={tabInfo.tintColor} />;
        },
      },
    },
    Drafts: {
      screen: DraftScreen,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Icon name="ios-document" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.secondary,
    },
  },
);

SentDraftsTabNavigator.navigationOptions = {
  headerTitle: 'KITe Home',
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: Colors.secondary,
};

const Navigator = createStackNavigator({
  Home: SentDraftsTabNavigator,
  SettingsScreen: {screen: SettingsScreen},
  LoginScreen: {screen: LoginScreen},
  RegistrationScreen: {screen: RegistrationScreen},
});

export default createAppContainer(Navigator);

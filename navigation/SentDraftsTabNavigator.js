import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import SettingsButton from '../components/SettingsButton';

import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import Colors from '../constants/Colors';

import DraftScreen from '../screens/DraftScreen';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import SentMailScreen from '../screens/SentMailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import GalleryScreen from '../screens/GalleryScreen';
import MailTemplateScreen from '../screens/MailTemplateScreen';
import MessageScreen from '../screens/MessageScreen';

const SentDraftsTabNavigator = createMaterialTopTabNavigator(
  {
    Sent: {
      screen: SentMailScreen,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="md-send" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
    Drafts: {
      screen: DraftScreen,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name="md-document" size={25} color={tabInfo.tintColor} />
          );
        },
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

SentDraftsTabNavigator.navigationOptions = ({navigation}) => ({
  headerTitle: 'KITe Home',
  headerRight: (
    <HeaderButtons HeaderButtonComponent={SettingsButton}>
      <Item
        title="Settings"
        iconName="md-settings"
        onPress={() => {
          navigation.navigate({routeName: 'SettingsScreen'});
        }}
      />
    </HeaderButtons>
  ),
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: Colors.secondary,
});

export default SentDraftsTabNavigator;
